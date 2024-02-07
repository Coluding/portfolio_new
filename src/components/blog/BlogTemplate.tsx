import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

const MathBlog = () => {
  return (
    <div>
      <p>This is an inline equation: <InlineMath>{'a^2 + b^2 = c^2'}</InlineMath></p>
      <p>And here is a block equation:</p>
      <BlockMath>{'\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}'}</BlockMath>
    </div>
  );
};

export default MathBlog;
