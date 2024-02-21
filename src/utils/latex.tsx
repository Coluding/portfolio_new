import React from 'react';
import Latex from 'react-latex';
import { Typography } from '@mui/material';


const parseAndRenderLatex = (inputText: string) => {
  const output = [];
  let currentPosition = 0;

  while (currentPosition < inputText.length) {
    let nextPosition = inputText.length;

    // Check for a section command
    const sectionStart = inputText.indexOf('\\section{', currentPosition);
    let blockStart = inputText.indexOf('%block', currentPosition);

    // Find the closest tag (section or block)
    let closestTag = sectionStart !== -1 ? '\\section{' : '%block';
    if (sectionStart !== -1 && blockStart !== -1) {
      if (sectionStart < blockStart) {
        closestTag = '\\section{';
        nextPosition = sectionStart;
      } else {
        closestTag = '%block';
        nextPosition = blockStart;
      }
    } else if (sectionStart !== -1) {
      nextPosition = sectionStart;
    } else if (blockStart !== -1) {
      nextPosition = blockStart;
    }

    // Add preceding text as inline LaTeX if there's any
    if (nextPosition > currentPosition) {
      const inlineText = inputText.substring(currentPosition, nextPosition);
      output.push(<Latex key={currentPosition}>{inlineText}</Latex>);
    }

    if (closestTag === '\\section{') {
      const sectionEnd = inputText.indexOf('}', sectionStart + 9);
      if (sectionEnd === -1) {
        console.error('Unmatched \\section tag');
        break;
      }

      const sectionText = inputText.substring(sectionStart + 9, sectionEnd);
      output.push(
        <Typography key={sectionStart} variant="h3" fontWeight={"bold"} marginBottom={"2px"} >
          {sectionText}
        </Typography>
      );

      currentPosition = sectionEnd + 1;
    } else if (closestTag === '%block') {
      const blockEnd = inputText.indexOf('%block', blockStart + 6);
      if (blockEnd === -1) {
        console.error('Unmatched %block tag');
        break;
      }

      // Extract block LaTeX content and add it as block LaTeX
      const blockText = inputText.substring(blockStart + 6, blockEnd).trim();
      output.push(<Latex key={blockStart} displayMode={true}>{blockText}</Latex>);

      currentPosition = blockEnd + 6;
    } else {
      // No more special tags, add any remaining text as inline LaTeX
      if (currentPosition < inputText.length) {
        const remainingText = inputText.substring(currentPosition);
        output.push(<Latex key={currentPosition}>{remainingText}</Latex>);
      }
      break;
    }
  }

  return output;
};


export function convertToCustomFormat(text: string): string {
  // Step 1: Remove citations. This regex looks for \textcite{...} and removes it.
  text = text.replace(/\(\s*\\textcite{[^}]*}\s*\)/g, '');

  // Step 2: Handle equation blocks. This is more complex due to nested content.
  // We replace \begin{equation} ... \end{equation} with %block ... %block
  text = text.replace(/\\begin{equation}([\s\S]*?)\\end{equation}/g, (_ , p1: string) => {
    // Remove any equation labels within the block
    let equationContent = p1.replace(/\\label{[^}]*}/g, '').trim();
    // Replace multiple equations within a single block with a single line, if necessary
    // and wrap content with $$
    equationContent = equationContent.replace(/\n/g, ' \\\\ ');
    return `%block $${equationContent}$ %block`;
  });

  // Remove figure blocks and their captions
  text = text.replace(/\\begin{figure}([\s\S]*?)\\end{figure}/g, '');

  // Optional: Further processing steps can be added here, like handling other LaTeX environments or commands

  return text;
}

const LatexRenderer: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div>
      {parseAndRenderLatex(text)}
    </div>
  );
};

export default LatexRenderer;


