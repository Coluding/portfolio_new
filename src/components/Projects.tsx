import { Box, Typography, useTheme } from "@mui/material";
import {useMediaQuery} from "@mui/material";
import { LinearProgress } from '@mui/material';
import {Divider} from "@mui/material";


const Projects = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box display={"grid"} gridTemplateColumns={"repeat(4, 1fr)"} gridGap={theme.spacing(2)}>
            <Box 
            sx={{
                gridColumn: "span 4",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: theme.spacing(2),
                gap: theme.spacing(2),
                textAlign: "center",
            }}>
                <Typography variant={"h3"}>Projects</Typography>
            </Box>
            <Box 
            sx={{
                gridColumn: "span 4",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: theme.spacing(2),
                gap: theme.spacing(2),
                textAlign: "center",
            }}>
                <Typography variant={"h4"}>Project 1</Typography>
            </Box>
        </Box>
    )
}

export default Projects