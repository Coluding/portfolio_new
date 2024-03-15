import {Box, useTheme, Divider, Button, useMediaQuery, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";


const BlogHome = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
        
            <Box fontSize={isMobile ? theme.typography.body1.fontSize : theme.typography.h3.fontSize}>
            <Typography>
                   I write about AI, Machine Learning and Software Development
                   </Typography>
                </Box>
                <Button size="small"
                    onClick={() => navigate("/blog")}
                    sx={{
                    color: "white",
                    padding: "0.3%",
                    backgroundColor:"black",
                    borderRadius: "10px",
                    ":hover": {
                        backgroundColor: "gray",
                    }   
                    
                }}>
                    Check them out
                </Button>
        </Box>
    )
}

export default BlogHome