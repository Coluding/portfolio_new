import { Box, Divider, Typography, useTheme, Fade, useMediaQuery, styled } from "@mui/material";
import { useParams } from 'react-router-dom';
import 'katex/dist/katex.min.css';
import { convertToCustomFormat } from '../../utils/latex';
import LatexRenderer from '../../utils/latex';
import { blogs } from './blogs';

const MathBlog = () => {
  const theme = useTheme();
  const { id } = useParams();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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
              {blog.content.map((content, index) => (
                <Box key={index} sx={{ padding: theme.spacing(2) }} marginTop={"2%"}>
                  {content.endsWith('.pdf') ? (
                    <IframeContainer>
                      <Iframe src={new URL( "/assets/" + content, import.meta.url).href}  allowFullScreen />
                    </IframeContainer>
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
