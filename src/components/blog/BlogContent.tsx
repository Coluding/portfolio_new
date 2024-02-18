import {Box, Divider, Typography, useTheme, Fade} from "@mui/material";
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
    <Box margin={"0%"}>
      <Fade  in={true} timeout={1500}>
      <Box paddingLeft={"15%"} paddingRight={"15%"} paddingTop={"2%"} paddingBottom={"10%"}>
      {blog && (
        <>
          <Typography variant={"h4"} sx={{textAlign: "center", padding: theme.spacing(2)}}>{blog.title}</Typography>
          <Divider sx={{ width: '100%', fontWeight:"bold"}}></Divider>
             <LatexRenderer text={convertToCustomFormat(blog.content)}/>
        

    
        </>
      )}
      </Box>
      </Fade>
    </Box>
  );
};

export default MathBlog;
