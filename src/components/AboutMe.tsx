import {Box, Typography, useTheme, useMediaQuery,Paper, Divider, Button} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

import myself from "../assets/me.jpg";
import cv from "../assets/lebenslauf.pdf";
import ba from "../assets/BA_kein_deckblatt.pdf";
import cv_german from "../assets/lebenslauf_deutsch.pdf";


const AboutMe = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [expanded, setExpanded] = useState<boolean>(true);


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
                gridColumn: isMobile? "span 4" : "span 4",
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
                    <img src={myself} alt={"me"} style={{width: "30%", borderRadius: "50%"}}/>
    
               </Box>

            </Box>
            <Box 
            sx={{
                gridColumn: isMobile ? "span 4" : "span 4",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: isMobile ? "10%" : "10%",
                paddingRight: isMobile ? "10%" : "10%",
                flexDirection: "column",
                gap: theme.spacing(2),
                textAlign: "center",
                }}>
                <Box fontSize={theme.typography.body2.fontSize}>
                    <Paper elevation={3}>
                <Accordion   sx={{
                backgroundColor: "white",
                border: "1px solid white",  
                ":hover": {
                    backgroundColor: "lightgray",
                }
                }}>
                <AccordionSummary
                onClick={() => setExpanded(!expanded)}
                expandIcon={<ExpandMoreIcon />}>
                    <Box display={"flex"} flexDirection={"column"}>
                    <Typography textAlign={"justify"}>
                         I'm currently studying  Computer Science, Information Systems, and Business Administration. My focus is set on Machine Learning.
                        For my Bachelor's thesis, I explored possibilities to make Transformer models more efficient for analyzing financial texts, especially when you don't have a lot of computing resources. 
                        I am generally very interested in the AI, especially Computer Vision and Natural Language Processing.
                        I am fascinated by how AI algorithms work and therefore want to understand and study them in depth.
                        <br/>
                    </Typography>
                    {expanded &&
                    <Box 
                    fontSize={isMobile ? theme.typography.body1.fontSize : theme.typography.h3.fontSize}
                    fontWeight={"bold"}
                    >
                <TypeAnimation
            
                cursor={true}
                sequence={["Expand to see more...", 1000 ]}
                repeat={0}
            />
            </Box>
                }
                </Box>
                
                </AccordionSummary>
                <AccordionDetails>
                <Typography textAlign={"justify"}>
                        In my job, I work as a Machine Learning Engineer and Full Stack Developer at a consulting company. 
                        Here, I use what I've learned about software development and machine learning to solve real-world problems.
                        <br/><br/>
                        At the same time, I'm also working as a Research Assistant at the University of Passau. My research here is about using natural language processing (NLP) in finance. It's an interesting area because combining AI with financial analysis brings up some unique challenges and chances for coming up with new ideas.
                        <br/><br/>
                        I've always been really into software development, working on many projects in AI, machine learning, and software engineering. These experiences have helped me grow my skills and understand more about how technology can solve different problems.
                        <br/><br/>
                        Right now, I'm focusing on learning more about Reinforcement Learning. I already know a lot about deep learning, and I'm excited to see how AI can make choices and learn from its environment to reach certain goals. I believe in always learning new things and applying my knowledge to the latest areas in AI.
                        <br/><br/>
                        To sum up, my journey has been all about constantly learning more about AI and deep learning, backed by a track record of research and applying what I know in real life. My academic and work experiences show my dedication to using technology to tackle complex issues, especially in making AI work better in finance and other areas.
                                
                    </Typography>
                </AccordionDetails>
            </Accordion>
            </Paper>
               </Box>   
   
            </Box>
            <Box sx={{ textAlign: 'center', 
                gridColumn: "span 4",
            marginTop: theme.spacing(2),
             display:"flex", 
             gap:"10px",
             justifyContent:"center"}}>
            <Button
              variant="contained"
              href={cv}
              download="lukas-bierling-cv.pdf"
            >
              Download CV
            </Button>
            <Button
              variant="contained"
              href={cv_german}
              download="lukas-bierling-cv-german.pdf"
            >
              German CV
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
    )
}

export default AboutMe