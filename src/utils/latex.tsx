import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

type TextSegment = JSX.Element | string;

function parseTextToSegments(text: string): TextSegment[] {
  const segments: TextSegment[] = [];
  let currentIndex = 0;

  while (currentIndex < text.length) {
    const inlineStart = text.indexOf('%inline', currentIndex);
    const blockStart = text.indexOf('%block', currentIndex);

    if (inlineStart === -1 && blockStart === -1) {
      segments.push(text.substring(currentIndex));
      break;
    }

    let nearestMarkerStart = Math.min(
      inlineStart !== -1 ? inlineStart : text.length,
      blockStart !== -1 ? blockStart : text.length
    );

    if (nearestMarkerStart > currentIndex) {
      segments.push(text.substring(currentIndex, nearestMarkerStart));
    }

    if (inlineStart !== -1 && (inlineStart < blockStart || blockStart === -1)) {
      const inlineEnd = text.indexOf('%inline', inlineStart + 7);
      if (inlineEnd === -1) {
        throw new Error('Unmatched %inline tag');
      }
      segments.push(<InlineMath math={text.substring(inlineStart + 7, inlineEnd)} />);
      currentIndex = inlineEnd + 7;
    } else if (blockStart !== -1) {
      const blockEnd = text.indexOf('%block', blockStart + 6);
      if (blockEnd === -1) {
        throw new Error('Unmatched %block tag');
      }
      segments.push(<BlockMath math={text.substring(blockStart + 6, blockEnd)} />);
      currentIndex = blockEnd + 6;
    }
  }

  return segments;
}

const MathTextRenderer: React.FC<{ text: string }> = ({ text }) => {
  const segments = parseTextToSegments(text);
  console.log(segments)
  return (
    <div>
      {segments.map((segment, index) => (
        <React.Fragment key={index}>
          {typeof segment === 'string' ? segment : segment}
        </React.Fragment>
      ))}
    </div>
  );
};

export default MathTextRenderer;
