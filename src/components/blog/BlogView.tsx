import { Box, useTheme, Divider, Typography, Grow, Paper, useMediaQuery } from "@mui/material";
import α from 'color-alpha';
import {BlogTemplate} from "./BlogTemplate";
import { useEffect } from "react";

import { blogs } from "./blogs";


const BlogView = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <Box display={"flex"} flexDirection={"column"}
        sx={{
            justifyContent: "center",
            padding: theme.spacing(2),
            textAlign: "center",
        }}>
              <Box sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            fontWeight: "bold",
            padding: 2,
            }}>
                <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
               
                }}>
                <Typography variant={isMobile ?  "h3" : 
                                    isTablet ? "h2": "h1"} fontWeight={"bold"}>My Personal Blog</Typography>
                <Typography variant={isMobile ? "body2": 
                                    isTablet? "body1": "h3"}>
                    I am trying to document and share my journey in AI, Machine Learning
                </Typography>
                </Box>
            <Divider sx={{ width: '100%'}}></Divider>
            </Box>
            <Box sx={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gridTemplateRows: "repeat(3, 1fr)",
                gap: theme.spacing(2),
            }}>
            {blogs.map((blog) => (
                <>
                 <Box sx={{
                    gridColumn: "span 1",
                    gridRow: "span 1",
                 }}>
                 {undefined}
                    </Box>
                <Grow in={true} timeout={1000}>
                <Paper elevation={5} sx={{
                    ":hover": {
                        background: α("lightgray", 0.9),
                    },
                    cursor: "pointer",
                    display: "flex",
                    gridColumn: "span 4",
                    gridRow: "span 1",
                 
                    alignItems: "start",
                    justifyContent:"start",
                    borderRadius: "15px",
                    background: α("white", 0.8 ),
                }}>
                <BlogTemplate {...blog} />
                </Paper>
                </Grow> 
                <Box sx={{
                    gridColumn: "span 1",
                    gridRow: "span 1",
                 }}>
                 {undefined}
                    </Box>
                </>
            ))}
            </Box>
        </Box>
    )
}

export default BlogView