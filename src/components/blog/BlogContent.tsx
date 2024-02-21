import {Box, Divider, Typography, useTheme, Fade, useMediaQuery} from "@mui/material";
import { useParams } from 'react-router-dom';
import 'katex/dist/katex.min.css'
import { convertToCustomFormat } from '../../utils/latex';
import LatexRenderer from '../../utils/latex';
import { blogs } from './blogs';



const MathBlog= () => {
  const theme = useTheme();
  const {id} = useParams();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const blog = blogs.find(blog => blog.id === parseInt(id || ""));
  const timestamp = new Date(blog?.date || "").toLocaleDateString("en-US", {year: "numeric", month: "long", day: "numeric"}); 

  return (
    <Box margin={"0%"}>
      <Fade  in={true} timeout={1500}>
      <Box paddingLeft={"15%"} paddingRight={"15%"} paddingTop={"2%"} paddingBottom={"10%"}>
      {blog && (
        <>
          <Typography variant={"h2"} sx={{textAlign: "center", padding: theme.spacing(2)}}>{blog.title}</Typography>
          <Divider sx={{ width: '100%', fontWeight:"bold"}}></Divider>
          <Box sx={{
                position: 'absolute',
                top: isMobile ? 1 : theme.spacing(2),
                left: isMobile ? 0 : theme.spacing(5), // Adjusted to align within the content area
           
              }}>
                <Typography variant="body1">{timestamp}</Typography>
              </Box>
          {blog.content.map((content, index) => (
            <Box key={index} sx={{padding: theme.spacing(2)}} marginTop={"2%"}>
             <LatexRenderer text={convertToCustomFormat(content)}/>
            </Box>
          ))}
        

    
        </>
      )}
      </Box>
      </Fade>
    </Box>
  );
};

export default MathBlog;
