import {Box, useTheme, Divider, Typography} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faKaggle } from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Socials = () => {
    const theme = useTheme();
    const [linkedinHover, setLinkedinHover] = useState(false)
    const [githubHover, setGithubHover] = useState(false)
    const [kaggleHover, setKaggleHover] = useState(false)

    return (
        <Box display={"flex"} 
        sx={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: theme.spacing(2),
            gap: theme.spacing(2),
            textAlign: "center",
        
        }}>
             <Divider sx={{ width: '100%', fontWeight:"bold"}}>Social Networks</Divider>
        
            <Box fontSize={theme.typography.h3.fontSize}>
                </Box>
               <Box display={"flex"} flexDirection={"row"} gap={"10%"}>
                <Box>
                <Link to={"https://www.linkedin.com/in/lukas-bierling-a2a6a4201/"} target="_blank">
                    <FontAwesomeIcon icon={faLinkedin}
                    onMouseEnter={() => setLinkedinHover(true)}
                    onMouseLeave={() => setLinkedinHover(false)}
                    bounce={linkedinHover}
                    
                    style={
                        {width:"30%",
                        height:"30%",
                        color:"black"}}/>
                </Link>
                <Typography variant="h5">LinkedIn</Typography>
                </Box>
                <Box>
                <Link to={"https://github.com/Coluding"} target="_blank">
                    <FontAwesomeIcon icon={faGithub}
                    onMouseEnter={() => setGithubHover(true)}
                    onMouseLeave={() => setGithubHover(false)}
                    bounce={githubHover}
                    style={
                        {width:"30%",
                        height:"30%",
                        color:"black"}}/>
                </Link>
                <Typography variant="h5">Github</Typography>
                </Box>

                <Box >
                <Link to={"https://www.kaggle.com/strangetravel"} target="_blank">
                    <FontAwesomeIcon icon={faKaggle}
                    onMouseEnter={() => setKaggleHover(true)}
                    onMouseLeave={() => setKaggleHover(false)}
                    bounce={kaggleHover}
                    style={
                        {width:"30%",
                        height:"30%",
                        color:"black"}}/>
                </Link>
                <Typography variant="h5">Kaggle</Typography>
                </Box>
               </Box>
        </Box>
    )
}

export default Socials
