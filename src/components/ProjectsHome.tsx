import {Box, useTheme, Divider, Button, Typography, useMediaQuery} from "@mui/material";
import { useNavigate } from "react-router-dom";


const ProjectsHome = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery("(max-width: 600px)");

    return (
        <Box display={"flex"} 
        sx={{
    
            padding: theme.spacing(2),
            flexDirection: "column",
    
            textAlign: "center",
        
        }}>
             <Divider sx={{ width: '100%', fontWeight:"bold"}}>Projects</Divider>
        
            <Box display={"flex"} 
            flexDirection={"row"} justifyContent={"space-evenly"} margin={"2    %"}>
               <Box sx={{
                textAlign: "center",
                maxWidth: isMobile ? "75%" : "50%"
               }}>
              <Typography variant="body1" textAlign="justify">
                I've worked on diverse projects spanning <b>AI</b>, <b>Machine Learning</b>, and <b>Software Development</b>, focusing primarily on <b>Natural Language Processing</b>, <b>Computer Vision</b>, and <b>Reinforcement Learning</b>. Additionally, I'm engaged in <b>Full Stack Development</b> projects.  Feel free to check them out :) 
                </Typography>

                </Box>
                </Box>
                <Box sx={{
                   padding: theme.spacing(2),

                }}>
                <Button size="small"
                    onClick={() => navigate("/projects")}
                    variant="contained"
                    sx={{
                        color: "black",
                        paddingLeft: "1.4%",
                        paddingRight: "1.4%",
                        backgroundColor:"black",
                        borderRadius: "10px",
                        fontSize: "80%",
                        background: "white",
                        ":hover": {
                        color: "black",
                        background: "lightgray"
                        }

                }}>
                    Check them out
                </Button>
                </Box>
        </Box>
    )
}

export default ProjectsHome