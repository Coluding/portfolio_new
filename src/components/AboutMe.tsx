import {Box, Typography, useTheme, Divider, Button} from "@mui/material";

import myself from "../assets/me.jpg";
import cv from "../assets/lebenslauf.pdf";
import ba from "../assets/BA_kein_deckblatt.pdf";


const AboutMe = () => {
    const theme = useTheme();


    return (
        <Box display={"grid"} gridTemplateColumns={"repeat(4, 1fr)"}>
           <Box sx={{
            gridColumn: "span 4",
            gridRow: "span 1",
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
            padding: 2,
            }}>
            <Divider sx={{ width: '100%'}}>About me</Divider>
            </Box>
            <Box sx={{
                gridColumn: "span 1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: theme.spacing(2),
                gap: theme.spacing(2),
                textAlign: "center",
            }}>
               <Box sx={{
                display:"grid",
                placeItems: "center",
                }}>
                    <img src={myself} alt={"me"} style={{width: "100%", borderRadius: "50%"}}/>
    
               </Box>

            </Box>
            <Box 
            sx={{
                gridColumn: "span 3",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: theme.spacing(2),
                gap: theme.spacing(2),
                textAlign: "center",
            }}>
                <Box fontSize={theme.typography.body2.fontSize}>
            <Typography textAlign={"justify"}>
            I'm currently studying in the fields of Computer Science, Information Systems, and Business Administration. For my Bachelor's thesis, I decided to focus on making Transformer models more efficient for analyzing financial texts, especially when you don't have a lot of computing resources. This work shows my interest in pushing the limits of AI technology to better handle complex data, especially in areas like finance.
            <br/><br/>
In my job, I work as a Machine Learning Engineer and Full Stack Developer at a consulting company. Here, I use what I've learned about software development and machine learning to solve real-world problems. This job keeps me up-to-date with the latest tech and allows me to create solutions that make a real difference.
<br/><br/>
At the same time, I'm also working as a Research Assistant at the University of Passau. My research here is about using natural language processing (NLP) in finance. It's an interesting area because combining AI with financial analysis brings up some unique challenges and chances for coming up with new ideas.
<br/><br/>
I've always been really into software development, working on many projects in AI, machine learning, and software engineering. These experiences have helped me grow my skills and understand more about how technology can solve different problems.
<br/><br/>
Right now, I'm focusing on learning more about Reinforcement Learning. I already know a lot about deep learning, and I'm excited to see how AI can make choices and learn from its environment to reach certain goals. I believe in always learning new things and applying my knowledge to the latest areas in AI.
<br/><br/>
To sum up, my journey has been all about constantly learning more about AI and deep learning, backed by a track record of research and applying what I know in real life. My academic and work experiences show my dedication to using technology to tackle complex issues, especially in making AI work better in finance and other areas.</Typography>
            </Box>
            <Box sx={{ textAlign: 'center', 
            marginTop: theme.spacing(2),
             display:"flex", 
             gap:"10px",
             justifyContent:"space-evenly"}}>
            <Button
              variant="contained"
              href={cv}
              download="lukas-bierling-cv.pdf"
            >
              Download CV
            </Button>
            <Button
              variant="contained"
              href={ba}
              download="lukas-bierling-thesis.pdf"
            >
            Bachelor thesis
            </Button>
          </Box>
   
   
            </Box>
            
        </Box>
    )
}

export default AboutMe