import {Box, Typography, useTheme, Divider, Button} from "@mui/material";

import myself from "../assets/me.jpg";
import cv from "../assets/lebenslauf.pdf";


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
            <Typography >
                I am a student of Computer Science, Information Systems and Business Adminstration. 
                <br/>
                I wrote my Bachelor thesis about efficient Transformers under computational constraints for financial text data. 
                <br/>
                I am currently working as a Machine Learning Engineer and Full Stack Developer in a consulting company.
                <br/>
                Further, I am parallelly working as a Research Assistant at the University of Passau in the field of financial NLP.
                <br/>
                I am a passionate Software Developer and have worked on a variety of projects in AI, Machine Learning and Software Development.
                <br></br>
                I am passionate about AI, Machine Learning and Software Development.
            </Typography>
            </Box>
            <Box sx={{ textAlign: 'center', marginTop: theme.spacing(2) }}>
            <Button
              variant="contained"
              href={cv}
              download="lukas-bierling-cv.pdf"
            >
              Download CV
            </Button>
          </Box>
   
   
            </Box>
            
        </Box>
    )
}

export default AboutMe