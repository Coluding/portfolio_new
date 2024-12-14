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
import ba2 from "../assets/thesis_bierling_gnn_rl_.pdf";
import cv_german from "../assets/lebenslauf_deutsch.pdf";

const stepsStart = [
  '2020  Bachelor of Science Economics',
  '2022 Bachelor of Science Information Systems',
  '2022 KPMG Data Scientist',
  '2023 Bachelor of Science Mathematical Computer Science',
  "2024 Research Assistant NLP University of Passau",
  "2024 Master of Science Artificial Intelligence"
];
const AboutMe = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const [expanded, setExpanded] = useState<boolean>(true);
    const steps = isMobile ? stepsStart.slice(2, 7) : stepsStart;




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
                I am a Master’s student in Artificial Intelligence at the University of Amsterdam. I completed two bachelor's degrees in Computer Science, and Economics. Concurrently, I am also pursuing a Bachelor's in Mathematical Software Development at the Fernuniversität Hagen to deepen my understanding of mathematics for AI research.
                <br/>
                <br/>
                My passion lies in Artificial Intelligence, particularly in Deep Learning, with a focus on NLP and Computer Vision. In my Bachelor's theses, I explored making Transformer models more efficient for financial text analysis and optimizing data center locations using Graph Neural Networks and Reinforcement Learning.
                <br/>
                <br/>
                I work as a Machine Learning Engineer and Full-Stack Developer at KPMG, where I apply AI to solve real-world problems. Additionally, I conduct research as a Research Assistant at the University of Passau, focusing on self-supervised learning and pretraining large language models for financial applications.
                I am particularly interested in how AI models can learn and adapt within dynamic environments, which has led me to explore Reinforcement Learning in greater depth. In this field, my focus is on how world models using self-supervised learning can make RL more sample efficient.
                <br/>
                <br/>
                Currently, I am researching the application of Reinforcement Learning and Graph Neural Networks to operations research problems and working on a paper in this field. This research explores dynamic and stochastic environments to optimize complex combinatorial decision-making processes.
                <br/>
                I continuously engage in private projects to advance my skills, combining my expertise in software development and AI research to push the boundaries of what’s possible in machine learning.                    </Typography>
                    {true &&
                    <Box marginTop={"5%"}>
                    <Stepper activeStep={3} alternativeLabel>
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
                gridColumn:  isMobile ? "span 4" : "span 4",
                marginTop: theme.spacing(2),
                display: "flex",
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
          </Box>
          <Box sx={{ textAlign: 'center', 
                gridColumn:  isMobile ? "span 4" : "span 4",
                marginTop: theme.spacing(2),
                display: "flex",
                gap:"10px",
                justifyContent:"center"}}>
           <Button
              variant="contained"
              href={ba}
              download="lukas-bierling-thesis.pdf"
            >
            Thesis NLP
            </Button>
            <Button
              variant="contained"
              href={ba2}
              download="thesis_bierling_gnn_rl.pdf"
            >
            Thesis GNN + RL
            </Button>
          </Box>
        </Box>
    )
}

export default AboutMe