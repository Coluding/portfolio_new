import { InlineMath, BlockMath } from 'react-katex';
import {Box, Divider, Typography, useTheme} from "@mui/material";
import { useParams } from 'react-router-dom';
import React from 'react';
import MathTextRenderer from '../../utils/latex';
import { blogs } from './blogs';



const MathBlog= () => {
  const theme = useTheme();
  const {id} = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  return (
    <Box>
      {blog && (
        <>
          <Typography variant={"h4"} sx={{textAlign: "center", padding: theme.spacing(2)}}>{blog.title}</Typography>
          <Divider sx={{ width: '100%', fontWeight:"bold"}}></Divider>
          <MathTextRenderer text={blog.content}/>
          <p>This is an inline equation: <InlineMath output="mathml">{'a^2 + b^2 = c^2'}</InlineMath></p>
          <p>And here is a block equation:</p>
          <BlockMath>{'\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}'}</BlockMath>
        </>
      )}
    </Box>
  );
};

export default MathBlog;
