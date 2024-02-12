import {Box, Divider, Typography, useTheme} from "@mui/material";
import { useParams } from 'react-router-dom';
import 'katex/dist/katex.min.css'
import { convertToCustomFormat } from '../../utils/latex';
import LatexRenderer from '../../utils/latex';
import { blogs } from './blogs';



const MathBlog= () => {
  const theme = useTheme();
  const {id} = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id || ""));
  return (
    <Box>
      {blog && (
        <>
          <Typography variant={"h4"} sx={{textAlign: "center", padding: theme.spacing(2)}}>{blog.title}</Typography>
          <Divider sx={{ width: '100%', fontWeight:"bold"}}></Divider>
             <LatexRenderer text={convertToCustomFormat(blog.content)}/>
        

    
        </>
      )}
    </Box>
  );
};

export default MathBlog;
