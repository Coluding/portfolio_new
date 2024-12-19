import { Box, Typography } from "@mui/material";
import {useMediaQuery} from "@mui/material";
import { LinearProgress } from '@mui/material';
import {Divider} from "@mui/material";



import python from "../assets/icons8-python-50.png"
import java from "../assets/icons8-java-50.png"
import javascript from "../assets/icons8-javascript-50.png"
import pytorch from "../assets/pytorch.png"
import tensorflow from "../assets/icons8-tensorflow-48.png"
import go from "../assets/c.svg"
import docker from "../assets/icons8-docker-50.png"
import azure from "../assets/icons8-azurblau-48.png"
import google from "../assets/google-cloud.svg"
import typescript from "../assets/icons8-typescript-50.png"

const Skills = () => {
    const isMobile = useMediaQuery("(max-width: 600px)");
    const barWidth = isMobile ? "3rem" : "8rem";
    const barHeight = isMobile ? "0.2rem" : "0.6rem";
    const logoWidth = isMobile ? "20px" : "40px";
    const logoHeight = isMobile ? "20px" : "40px";
    const jsLogoWidth = isMobile ? "25px" : "50px";
    const jsLogoHeight = isMobile ? "25px" : "50px"

    return (
        <Box display={"grid"} gridTemplateColumns={"repeat(12, 1fr)"}
         sx={{gap: 0, padding: 2, }}
        >
            <Box sx={{
            gridColumn: "span 12",
            gridRow: "span 3",
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
            padding: 2,
            }}>
            <Divider sx={{ width: '100%'}}>Skills</Divider>
            </Box>
            <Box sx={{
                gridColumn: "span 4",
                gridRow: "span 3",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexDirection: "column",
                padding: 2,
                gap: 2,
                textAlign: "center",
            }}>
                <Typography fontWeight={"bold"} variant={"body1"}>Machine Learning Tech Stack</Typography>
            </Box>
            <Box sx={{
                gridColumn: "span 4",
                gridRow: "span 3",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexDirection: "column",
                padding: 2,
                gap: 2,
                textAlign: "center",
            }}>
                <Typography fontWeight={"bold"} variant={"body1"}>Software Development Tech Stack</Typography>
            </Box>
            <Box sx={{
                gridColumn: "span 4",
                gridRow: "span 3",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexDirection: "column",
                padding: 2,
                gap: 2,
                textAlign: "center",
            }}>
                <Typography fontWeight={"bold"} variant={"body1"}>Infrastructure Tech Stack</Typography>
            </Box>
            <Box sx={{
                gridColumn: "span 4",
                gridRow: "span 3",
                display: "flex",
                flexDirection: "column",
            }}>
            <Box sx={{
                gridColumn: "span 2",
                gridRow: "span 1",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexDirection: "column",
                padding: 2,
                gap: 2,
                textAlign: "center",
            }}>
                <Box >
                    <Typography variant={"body1"}>Python</Typography>
                <img src={python} alt={"python"} width={logoWidth} height={logoHeight }/>
                <LinearProgress variant={"determinate"}  value={90}
                sx={{
                    height: barHeight,
                    width: barWidth,
                    marginTop: "1rem",
                    borderRadius: "1rem",
                    backgroundColor: "lightgray",
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: "black", 
                        
                    }}}
                    />
                </Box>
            </Box>
            <Box sx={{
                gridColumn: "span 2",
                gridRow: "span 1",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexDirection: "column",
                padding: 2,
                gap: 2,
                textAlign: "center",
            }}>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}
                 padding={2} gap={0} textAlign={"center"}>
                    <Typography variant={"body1"}>Pytorch</Typography>
                <img src={pytorch} alt={"pytorch"} width={logoWidth} height={logoHeight}/>
                <LinearProgress variant={"determinate"}  value={90}
                sx={{
                    height: barHeight,
                    marginTop: "1rem",
                    width: barWidth,
                    borderRadius: "1rem",
                    alignSelf: "center",
                    backgroundColor: "lightgray",
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: "black", 
                        
                    }}}
                    />
                </Box>
                </Box>
                <Box sx={{
                gridColumn: "span 2",
                gridRow: "span 1",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexDirection: "column",
                padding: 2,
                gap: 2,
                textAlign: "center",
            }}>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}
                 padding={2} gap={0} textAlign={"center"}>
                    <Typography variant={"body1"}>Tensorflow</Typography>
                <img src={tensorflow} alt={"tensorflow"} width={logoWidth} height={logoHeight}/>
                <LinearProgress variant={"determinate"}  value={50}
                sx={{
                    height: barHeight,
                    marginTop: "1rem",
                    width: barWidth,
                    borderRadius: "1rem",
                    alignSelf: "center",
                    backgroundColor: "lightgray",
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: "black", 
                        
                    }}}
                    />
                </Box>
            </Box>
            </Box>
           
     
            <Box sx={{
                gridColumn: "span 4",
                gridRow: "span 3",
            }}>
            <Box sx={{
                gridColumn: "span 2",
                gridRow: "span 1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: 2,
                gap: 2,
                textAlign: "center",
            }}>
                <Box >
                <Typography variant={"body1"}>JS/TS</Typography>
                <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
                <img src={javascript} alt={"js"} width={jsLogoWidth} height={jsLogoHeight}/>
                <img src={typescript} alt={"ts"} width={jsLogoWidth} height={jsLogoHeight}/>
                </Box>
                <LinearProgress variant={"determinate"}  value={80}
                sx={{
                    height: barHeight,
                    width: barWidth,
                    marginTop: "1rem",
                    borderRadius: "1rem",
                    backgroundColor: "lightgray",
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: "black", 
                        
                    }}}
                    />
                </Box>
            </Box>
            <Box sx={{
                gridColumn: "span 2",
                gridRow: "span 1",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexDirection: "column",
                padding: 2,
                gap: 2,
                textAlign: "center",
            }}>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}
                 padding={2} gap={0} textAlign={"center"}>
                    <Typography variant={"body1"}>Java</Typography>
                <img src={java} alt={"java"} width={logoWidth} height={logoHeight}/>
                <LinearProgress variant={"determinate"}  value={65}
                sx={{
                    height: barHeight,
                    marginTop: "1rem",
                    width: barWidth,
                    borderRadius: "1rem",
                    alignSelf: "center",
                    backgroundColor: "lightgray",
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: "black", 
                        
                    }}}
                    />
                </Box>
                </Box>
                <Box sx={{
                gridColumn: "span 2",
                gridRow: "span 1",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexDirection: "column",
                padding: 2,
                gap: 2,
                textAlign: "center",
            }}>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}
                 padding={2} gap={0} textAlign={"center"}>
                    <Typography variant={"body1"}>C++</Typography>
                <img src={go} alt={"golang"} width={logoWidth} height={logoHeight}/>
                <LinearProgress variant={"determinate"}  value={50}
                sx={{
                    height: barHeight,
                    marginTop: "1rem",
                    width: barWidth,
                    borderRadius: "1rem",
                    alignSelf: "center",
                    backgroundColor: "lightgray",
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: "black", 
                        
                    }}}
                    />
                </Box>
            </Box>
            </Box>
       
            <Box sx={{
                gridColumn: "span 4",
                gridRow: "span 3",
            }}>
            <Box sx={{
                gridColumn: "span 2",
                gridRow: "span 1",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexDirection: "column",
                padding: 2,
                gap: 2,
                textAlign: "center",
            }}>
                <Box>
                    <Typography variant={"body1"}>Azure</Typography>
                <img src={azure} alt={"azure"} width={logoWidth} height={logoHeight}/>
                <LinearProgress variant={"determinate"}  value={75}
                sx={{
                    height: barHeight,
                    width: barWidth,
                    marginTop: "1rem",
                    borderRadius: "1rem",
                    backgroundColor: "lightgray",
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: "black", 
                        
                    }}}
                    />
                </Box>
            </Box>
            <Box sx={{
                gridColumn: "span 2",
                gridRow: "span 1",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexDirection: "column",
                padding: 2,
                gap: 2,
                textAlign: "center",
            }}>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}
                 padding={2} gap={0} textAlign={"center"}>
                    <Typography variant={"body1"}>Google </Typography>
                <img src={google} alt={"google"} width={logoWidth} height={logoHeight}/>
                <LinearProgress variant={"determinate"}  value={65}
                sx={{
                    height: barHeight,
                    marginTop: "1rem",
                    width: barWidth,
                    borderRadius: "1rem",
                    alignSelf: "center",
                    backgroundColor: "lightgray",
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: "black", 
                        
                    }}}
                    />
                </Box>
                </Box>
                <Box sx={{
                gridColumn: "span 2",
                gridRow: "span 1",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexDirection: "column",
                padding: 2,
                gap: 2,
                textAlign: "center",
            }}>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}
                 padding={2} gap={0} textAlign={"center"}>
                    <Typography variant={"body1"}>Docker</Typography>
                <img src={docker} alt={"docker"} width={logoWidth} height={logoHeight}/>
                <LinearProgress variant={"determinate"}  value={70}
                sx={{
                    height: barHeight,
                    marginTop: "1rem",
                    width: barWidth,
                    borderRadius: "1rem",
                    alignSelf: "center",
                    backgroundColor: "lightgray",
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: "black", 
                        
                    }}}
                    />
                </Box>
            </Box>
            </Box>
            
        </Box>
    )
}

export default Skills;