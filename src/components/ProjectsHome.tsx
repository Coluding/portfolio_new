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
               <Typography variant="body1" textAlign={"justify"}>
                        I have worked on a variety of projects in AI, Machine Learning and Software Development.
                        
                        My main research and project interests are in the field of <b>Natural Language Processing</b>, <b>
                            Computer Vision</b> and <b>Reinforcement Learning</b>. The latter is a field I am currently learning more about, which will be documented in my blog.   
                        
                        I am also interested in <b>Full Stack Development</b> and have worked on a variety of projects in this field.
                        <br/>
                        <br/>
                        My projects are either research oriented or practical applications of AI and Software Development. 
                        
                        I like doing both, because I believe that research and practical applications are both important for the development of AI and Software. 
                </Typography>
                </Box>
                </Box>
                <Box sx={{
                   padding: theme.spacing(2),

                }}>
                <Button size="small"
                    onClick={() => navigate("/projects")}
                    sx={{
                    color: "white",
                    backgroundColor:"black",
                    paddingLeft: "1.4%",
                    paddingRight: "1.4%",
                    borderRadius: "10px",
                    ":hover": {
                        backgroundColor: "gray",
                    }
                }}>
                    Check them out
                </Button>
                </Box>
        </Box>
    )
}

export default ProjectsHome