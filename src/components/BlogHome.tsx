import {Box, useTheme, Divider, Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";


const BlogHome = () => {
    const theme = useTheme();
    const navigate = useNavigate();
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
             <Divider sx={{ width: '100%', fontWeight:"bold"}}>Blog</Divider>
        
            <Box fontSize={theme.typography.h3.fontSize}>
                <TypeAnimation
                    cursor={true}
                    sequence={["Welcome to my Blog", 1000, "I write about AI, Machine Learning and Software Development", 1000]}
                    repeat={Infinity}
                />
                </Box>
                <Button 
                    onClick={() => navigate("/blog")}
                    sx={{
                    color: "white",
                    backgroundColor:"black",
                    borderRadius: "10px",
                   
                }}>
                    See more ...
                </Button>
        </Box>
    )
}

export default BlogHome