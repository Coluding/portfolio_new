import { Box, Typography, useTheme } from "@mui/material";
import {useMediaQuery} from "@mui/material";
import { LinearProgress } from '@mui/material';
import {Divider} from "@mui/material";

import python from "../assets/icons8-python-50.png"
import java from "../assets/icons8-java-50.png"
import javascript from "../assets/icons8-javascript-50.png"
import pytorch from "../assets/pytorch.png"
import tensorflow from "../assets/icons8-tensorflow-48.png"
import go from "../assets/go.png"
import docker from "../assets/icons8-docker-50.png"
import azure from "../assets/icons8-azurblau-48.png"
import google from "../assets/google-cloud.svg"

const Skills = () => {
    const isMobile = useMediaQuery("(max-width: 600px)");
    const barWidth = isMobile ? "3rem" : "10rem";
    const barHeight = isMobile ? "0.2rem" : "1rem";
    const logoWidth = isMobile ? "20px" : "40px";
    const logoHeight = isMobile ? "20px" : "40px";
    const theme = useTheme();


    return (
        <Box display={"grid"} gridTemplateColumns={"repeat(12, 1fr)"}
         sx={{gap: 0, padding: 2, }}
        gridTemplateRows={"repeat (13, 1fr)"}>
            <Box sx={{
            gridColumn: "span 12",
            gridRow: "span 1",
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
            padding: 2,
            }}>
            <Divider sx={{ width: '100%'}}>Skills</Divider>
            </Box>
            <Box sx={{
                gridColumn: "span 6",
                gridRow: "span 3",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexDirection: "column",
                padding: 2,
                gap: 2,
                textAlign: "center",
            }}>
                <Typography fontWeight={"bold"} variant={"h3"}>Machine Learning Tech Stack</Typography>
            </Box>
            <Box sx={{
                gridColumn: "span 6",
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
                    <Typography variant={"h3"}>Python</Typography>
                <img src={python} alt={"python"} width={logoWidth} height={logoHeight}/>
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
                gridColumn: "span 6",
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
                    <Typography variant={"h3"}>Pytorch</Typography>
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
                gridColumn: "span 6",
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
                    <Typography variant={"h3"}>Tensorflow</Typography>
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
            <Box sx={{
            gridColumn: "span 12",
            gridRow: "span 1",
            display: "flex",
            justifyContent: "center",
            padding: 2,
            }}>
            <Divider sx={{ width: '100%'}} ></Divider>
            </Box>
            <Box sx={{
                gridColumn: "span 6",
                gridRow: "span 3",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexDirection: "column",
                padding: 2,
                gap: 2,
                textAlign: "center",
            }}>
                <Typography fontWeight={"bold"} 
                variant={"h3"}>Frontend and Backend Tech Stack</Typography>
            </Box>
            <Box sx={{
                gridColumn: "span 6",
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
                    <Typography variant={"h3"}>Java</Typography>
                <img src={java} alt={"java"} width={logoWidth} height={logoHeight}/>
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
            <Box sx={{
                gridColumn: "span 6",
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
                    <Typography variant={"h3"}>Javascript/React/Node</Typography>
                <img src={javascript} alt={"javascript"} width={logoWidth} height={logoHeight}/>
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
            <Box sx={{
                gridColumn: "span 6",
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
                    <Typography variant={"h3"}>Golang</Typography>
                <img src={go} alt={"go"} width={logoWidth} height={logoHeight} />
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
            <Box sx={{
            gridColumn: "span 12",
            gridRow: "span 1",
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
            padding: 2,
            }}>
            <Divider sx={{ width: '100%'}}></Divider>
            </Box>
            <Box sx={{
                gridColumn: "span 6",
                gridRow: "span 3",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexDirection: "column",
                padding: 2,
                gap: 2,
                textAlign: "center",
             
            }}>
                <Typography fontWeight={"bold"} 
                variant={"h3"}>Infrastructure Tech Stack</Typography>
            </Box>
            <Box sx={{
                gridColumn: "span 6",
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
                    <Typography variant={"h3"}>Docker</Typography>
                <img src={docker} alt={"docker"} width={logoWidth} height={logoHeight}/>
                <LinearProgress variant={"determinate"}  value={75}
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
                gridColumn: "span 6",
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
                    <Typography variant={"h3"}>Azure</Typography>
                <img src={azure} alt={"azure"} width={logoWidth} height={logoHeight}/>
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
            <Box sx={{
                gridColumn: "span 6",
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
                    <Typography variant={"h3"}>Google Cloud</Typography>
                <img src={google} alt={"go"} width={logoWidth} height={logoHeight} />
                <LinearProgress variant={"determinate"}  value={60}
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
    )
}

export default Skills;