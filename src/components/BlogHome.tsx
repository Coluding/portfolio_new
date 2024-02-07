import {Box, Typography, useTheme, Divider} from "@mui/material";
import { TypeAnimation } from "react-type-animation";


const BlogHome = () => {
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
             <Divider sx={{ width: '100%', fontWeight:"bold"}}>Blog</Divider>
            <Typography variant={"h2"}sx={{
                fontSize: theme.typography.h2.fontSize,
                fontWeight: "bold",
            }}>
                Blog
            </Typography>
            <Box fontSize={theme.typography.h3.fontSize}>
                <TypeAnimation
                    cursor={true}
                    sequence={["Welcome to my Blog", 1000, "I write about AI, Machine Learning and Software Development", 1000]}
                    repeat={Infinity}
                />
                </Box>
        </Box>
    )
}

export default BlogHome