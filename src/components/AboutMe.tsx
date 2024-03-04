import {Box, Typography, useTheme, useMediaQuery,Paper, Divider, Button, Stepper, StepLabel, Step} from "@mui/material";
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

const steps = [
  '2020  Bachelor of Science Economics',
  '2021 PwC Financial Mathematics',
  '2022 Bachelor of Science Information Systems',
  '2022 KPMG Data Scientist',
  '2023 Bachelor of Science Computer Science',
  "2024 Research Assistant NLP University of Passau",
];
const AboutMe = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
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
                <Box fontSize={theme.typography.body2.fontSize}     width={isTablet ? "100%": "50%"}>
                    <Paper elevation={3} sx={{
                    }}>
                <Accordion   sx={{
                backgroundColor: "white",
                border: "1px solid white",  
                ":hover": {
                    backgroundColor: "lightgray",
                },
                padding: "2%",
                }}>
                <AccordionSummary
                onClick={() => setExpanded(!expanded)}
                expandIcon={<ExpandMoreIcon />}>
                    <Box display={"flex"} flexDirection={"column"}>
                    <Typography textAlign={"justify"}>
                    I am a passionate AI enthusiast and Machine Learning Engineer focussing on theory and application of Deep Learning in the field of NLP, Computer vision and Reinforcement  Learning. <br/>
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
                I'm a Computer Science, Information Systems, and Business Administration student focusing on Machine Learning, with a Bachelor's thesis on making Transformer models more efficient for financial text analysis. I work as a Machine Learning Engineer and Full Stack Developer, applying my skills in software development and AI to solve real-world problems, while also researching NLP in finance as a Research Assistant at the University of Passau. My interests span AI, particularly in Computer Vision and NLP, and I'm currently delving into Reinforcement Learning to further understand how AI can learn and make decisions within its environment.        
                    </Typography>
                    {true &&
                    <Box marginTop={"5%"}>
                    <Stepper activeStep={2} alternativeLabel>
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                  </Box>
}
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