import {Box, Typography, useTheme, useMediaQuery,Paper, Divider, Button, Stepper, StepLabel, Step} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

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
                  { expanded &&
                    <Box display={"flex"} flexDirection={"column"}>
                    <Typography textAlign={"justify"}>
                    I am a passionate AI enthusiast and Machine Learning Engineer focussing on theory and application of Deep Learning in the field of NLP, Computer vision and Reinforcement  Learning. <br/>
                    </Typography>
                    {expanded &&
                    <Box 
                    fontSize={isMobile ? theme.typography.body1.fontSize : theme.typography.h3.fontSize}
                    fontWeight={"bold"}
                    >
                  <Divider sx={{ width: '100%', marginTop: "5%", marginBottom: "5%"}}></Divider>
                <Typography sx={{fontSize: isMobile ? "10%" : "90%", fontWeight: "bold"}}>
                  Expand to see more ...
                </Typography>
            </Box>
                }
                </Box>
    }
                
                </AccordionSummary>
                <AccordionDetails>
                <Accordion>
  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    <Typography  sx={{fontSize: isMobile ? "50%" : "150%", fontWeight: "bold"}}>Education</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography textAlign="justify">
      I am a Master’s student in   Artificial Intelligence   at the   University of Amsterdam, where I focus on advanced AI concepts and research methodologies. I hold dual Bachelor's degrees in   Computer Science   and   Economics, which provide me with a unique interdisciplinary perspective. Additionally, I am pursuing a Bachelor's in   Mathematical Software Development   at   Fernuniversität Hagen   to deepen my mathematical expertise for AI research.
    </Typography>
  </AccordionDetails>
</Accordion>

<Accordion>
  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
  <Typography  sx={{fontSize: isMobile ? "50%" : "150%", fontWeight: "bold"}}>Research Focus</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography textAlign="justify">
      My primary research interests lie in   Deep Learning, particularly in   Natural Language Processing, Computer Vision, and   Reinforcement Learning. In my Bachelor's theses, I explored innovative ways to improve   Transformer efficiency   for financial text analysis and developed strategies for optimizing   data center locations   using   Graph Neural Networks  and   RL . 

      I actively implement and analyze   state-of-the-art research papers   to deepen my understanding and share insights through my   blog posts . My projects often combine   theoretical advancements   with practical applications, reflecting my dedication to bridging the gap between research and real-world implementation.
    </Typography>
  </AccordionDetails>
</Accordion>

<Accordion>
  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
  <Typography  sx={{fontSize: isMobile ? "50%" : "150%", fontWeight: "bold"}}>Research Details</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography textAlign="justify">
      My research focuses on leveraging   self-supervised learning  to enable agents to   plan and act   effectively in   dynamic and stochastic environments . Specifically, I am investigating how SSL can enhance  Graph Neural Networks  and   Reinforcement Learning  to tackle   operations research problems   involving complex combinatorial decision-making.

      I have implemented various research papers exploring these domains and contributed to building a   research community   through collaborations and knowledge sharing. By developing agents that can   learn graph-structured representations, my goal is to improve their ability to   simulate scenarios,   optimize planning strategies, and make informed decisions with limited data. 

      My work on   world models   and   self-supervised techniques   aims to make RL more   sample-efficient   and adaptable to real-world constraints.
    </Typography>
  </AccordionDetails>
</Accordion>

<Accordion>
  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
  <Typography  sx={{fontSize: isMobile ? "50%" : "150%", fontWeight: "bold"}}>Professional Experience</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography textAlign="justify">
      I work as a   Machine Learning Engineer   and   Full-Stack Developer   at   KPMG, where I design and implement AI solutions for real-world challenges. My projects include developing   innovative computer vision models   for object detection and integrating   language models   into applications to enhance accessibility and usability for clients.

      Additionally, as a   Research Assistant   at the   University of Passau, I focus on developing   self-supervised methods   for   pretraining large language models   tailored to financial applications. My role involves building   modular libraries   for document encoders, collaborating on research papers, and exploring advanced   representation learning techniques .
    </Typography>
  </AccordionDetails>
</Accordion>

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