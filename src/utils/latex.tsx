import React from 'react';
import Latex from 'react-latex';

const parseAndRenderLatex = (inputText: string) => {
  const output = [];
  let currentPosition = 0;
  let blockStart = inputText.indexOf('%block', currentPosition);

  while (blockStart !== -1) {
    // Add preceding text as inline LaTeX if there's any
    if (blockStart > currentPosition) {
      const inlineText = inputText.substring(currentPosition, blockStart);
      output.push(<Latex key={currentPosition}>{inlineText}</Latex>);
    }

    const blockEnd = inputText.indexOf('%block', blockStart + 6);
    if (blockEnd === -1) {
      // No closing tag found, treat the rest as inline LaTeX
      console.error('Unmatched %block tag');
      break;
    }

    // Extract block LaTeX content and add it as block LaTeX
    const blockText = inputText.substring(blockStart + 6, blockEnd).trim();
    output.push(<Latex key={blockStart} displayMode={true}>{blockText}</Latex>);

    // Move current position past this block
    currentPosition = blockEnd + 6;
    blockStart = inputText.indexOf('%block', currentPosition);
  }

  // Add any remaining text as inline LaTeX
  if (currentPosition < inputText.length) {
    const remainingText = inputText.substring(currentPosition);
    output.push(<Latex key={currentPosition}>{remainingText}</Latex>);
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


