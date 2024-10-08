import { Box, Divider, Typography, useMediaQuery, useTheme, Fade, styled, Button } from "@mui/material";
import { useParams } from 'react-router-dom';
import 'katex/dist/katex.min.css';
import { convertToCustomFormat } from '../../utils/latex';
import LatexRenderer from '../../utils/latex';
import { blogs } from './blogs';
import { Key } from "react";



const MathBlog = () => {
  const theme = useTheme();
  const { id } = useParams();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  //const isMobile = true;
  const blog = blogs.find(blog => blog.id === parseInt(id || ""));
  const timestamp = new Date(blog?.date || "").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  
  const IframeContainer = styled('div')(() => ({
    overflow: 'hidden',
    paddingBottom: '56.25%', 
    position: 'relative',
    height: 0,
    width: '100%',
  }));

  const Iframe = styled('iframe')({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none', // Remove iframe border
  });

  return (
    <Box margin="0%">
      <Fade in={true} timeout={1500}>
        <Box paddingLeft={"15%"} paddingRight={"15%"} paddingTop={"2%"} paddingBottom={"10%"}>
          {blog && (
            <>
              <Typography variant="h2" sx={{ textAlign: "center", padding: theme.spacing(2) }}>
                {blog.title}
              </Typography>
              <Divider sx={{ width: '100%', fontWeight: "bold" }} />
              <Box sx={{
                position: 'absolute',
                top: isMobile ? 1 : theme.spacing(2),
                left: isMobile ? 0 : theme.spacing(5),
              }}>
                <Typography variant="body1">{timestamp}</Typography>
              </Box>
              {Array.isArray(blog.content) && blog.content.map((content: string, index: Key | null | undefined) => (
                <Box key={index} sx={{ padding: theme.spacing(2), display:"flex", justifyContent:"center" }} marginTop={"2%"}>
                  {content.endsWith('.pdf') ? (
                    
                    isMobile ? (
                      <Box sx={{ padding: theme.spacing(2), display:"flex", textAlign:"justify", 
                      flexDirection:"column", justifyContent:"center" , width:"50%"}}>
                      <Typography variant="body1" textAlign={"justify"}>
                        This blog article was written in LaTeX and converted to PDF.
                        Latex PDF content cannot be read currently by the frame. Please download the file below. 
                        If you have encountered this issue, please let me know.
                      </Typography>
                      <Button
                        sx={{ marginTop: theme.spacing(2) , width: "50%", alignSelf:"center"}}
                        variant="contained"
                        component="a"
                        href={new URL("/assets/" + content, import.meta.url).href}
                        download
                      >
                        Download PDF
                      </Button>
                      </Box>
                    ) : (
                     
                      
                      <IframeContainer>
                        <Iframe src={new URL("/assets/" + content, import.meta.url).href} allowFullScreen />
                      </IframeContainer>
                    
                    )
                  ) : (
                    <LatexRenderer text={convertToCustomFormat(content)} />
                  )}
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
