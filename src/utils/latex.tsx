import React from 'react';
import Latex from 'react-latex';
import { Typography } from '@mui/material';

// Function to parse and render LaTeX input
const parseAndRenderLatex = (inputText: string) => {
  const output = [];
  let currentPosition = 0;

  while (currentPosition < inputText.length) {
    let nextPosition = inputText.length;

    // Check for the %end% marker to stop processing
    const endMarker = inputText.indexOf('%end%', currentPosition);
    if (endMarker !== -1) {
      // Add any preceding text before %end% and stop processing
      if (endMarker > currentPosition) {
        const inlineText = inputText.substring(currentPosition, endMarker);
        output.push(<Latex key={currentPosition}>{inlineText}</Latex>);
      }
      break; // Stop further processing after encountering %end%
    }

    // Check for section and block commands
    const sectionStart = inputText.indexOf('\\section{', currentPosition);
    const blockStart = inputText.indexOf('%block', currentPosition);

    // Find the closest tag (section or block)
    let closestTag = sectionStart !== -1 ? '\\section{' : '%block';
    if (sectionStart !== -1 && blockStart !== -1) {
      closestTag = sectionStart < blockStart ? '\\section{' : '%block';
      nextPosition = Math.min(sectionStart, blockStart);
    } else if (sectionStart !== -1) {
      nextPosition = sectionStart;
    } else if (blockStart !== -1) {
      nextPosition = blockStart;
    }

    // Add preceding text as inline LaTeX
    if (nextPosition > currentPosition) {
      const inlineText = inputText.substring(currentPosition, nextPosition);
      output.push(<Latex key={currentPosition}>{inlineText}</Latex>);
    }

    // Handle section
    if (closestTag === '\\section{') {
      const sectionEnd = inputText.indexOf('}', sectionStart + 9);
      if (sectionEnd === -1) {
        console.error('Unmatched \\section tag');
        break;
      }

      const sectionText = inputText.substring(sectionStart + 9, sectionEnd);
      output.push(
        <Typography key={sectionStart} variant="h3" fontWeight="bold" marginBottom="2px">
          {sectionText}
        </Typography>
      );

      currentPosition = sectionEnd + 1;
    }
    // Handle block LaTeX
    else if (closestTag === '%block') {
      const blockEnd = inputText.indexOf('%block', blockStart + 6);
      if (blockEnd === -1) {
        console.error('Unmatched %block tag');
        break;
      }

      // Extract block LaTeX content and add it as a block LaTeX (displayMode = true)
      const blockText = inputText.substring(blockStart + 6, blockEnd).trim();
      output.push(<Latex key={blockStart} displayMode={true}>{blockText}</Latex>);

      currentPosition = blockEnd + 6;
    } else {
      // Add any remaining inline text if no special tags found
      if (currentPosition < inputText.length) {
        const remainingText = inputText.substring(currentPosition);
        output.push(<Latex key={currentPosition}>{remainingText}</Latex>);
      }
      break;
    }
  }

  return output;
};

// Function to convert LaTeX text to a custom format (for equation blocks and citations)
export function convertToCustomFormat(text: string): string {
  // Step 1: Remove citations (\textcite{...})
  text = text.replace(/\(\s*\\textcite{[^}]*}\s*\)/g, '');

  // Step 2: Handle equation blocks by converting \begin{equation} ... \end{equation} to %block ... %block
  text = text.replace(/\\begin{equation}([\s\S]*?)\\end{equation}/g, (_, p1: string) => {
    let equationContent = p1.replace(/\\label{[^}]*}/g, '').trim();
    equationContent = equationContent.replace(/\n/g, ' \\\\ ');
    return `%block $${equationContent}$ %block`;
  });

  // Remove figure blocks and their captions
  text = text.replace(/\\begin{figure}([\s\S]*?)\\end{figure}/g, '');

  console.log(text); // For debugging purposes
  return text;
}

// React component to render LaTeX
const LatexRenderer: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div>
      {parseAndRenderLatex(text)}
    </div>
  );
};

export default LatexRenderer;
