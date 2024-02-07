import {Box, Typography, useTheme} from "@mui/material";

import myself from "../assets/me.jpg";


const AboutMe = () => {
    const theme = useTheme();
    return (
        <Box display={"grid"} gridTemplateColumns={"repeat(4, 1fr)"}>
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
               <Box>
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
                <Typography variant={"h3"}>About Me</Typography>
                <Box fontSize={theme.typography.body3.fontSize}>
            <Typography >
                I am a student of Business Adminstration, Computer Science and Mathematics. 
                <br/>
                I wrote my Bachelor thesis about efficient Transformers under computational constraints for financial text data. 
                <br/>
                I am currently working as a Machine Learning Engineer and Full Stack Developer in a consulting company. 
                <br/>
                I am passionate about AI, Machine Learning and Software Development.
            </Typography>
            </Box>

   
            </Box>
            
        </Box>
    )
}

export default AboutMe