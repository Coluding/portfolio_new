import {Box, useTheme, Divider, Typography} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faKaggle } from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Socials = () => {
    const theme = useTheme();
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
                    style={
                        {width:"50%",
                        height:"50%",
                        color:"black"}}/>
                </Link>
                <Typography variant="h5">LinkedIn</Typography>
                </Box>
                <Box>
                <Link to={"https://github.com/Coluding"} target="_blank">
                    <FontAwesomeIcon icon={faGithub}
                    style={
                        {width:"50%",
                        height:"50%",
                        color:"black"}}/>
                </Link>
                <Typography variant="h5">Github</Typography>
                </Box>

                <Box >
                <Link to={"https://www.kaggle.com/strangetravel"} target="_blank">
                    <FontAwesomeIcon icon={faKaggle}
                    style={
                        {width:"50%",
                        height:"50%",
                        color:"black"}}/>
                </Link>
                <Typography variant="h5">Kaggle</Typography>
                </Box>
               </Box>
        </Box>
    )
}

export default Socials
