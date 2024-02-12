import { Box, useTheme, Divider, Typography, Grow, Paper, useMediaQuery } from "@mui/material";
import α from 'color-alpha';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { ProjectTemplate, ProjectTemplateProps } from "./ProjectTemplate";
import { useEffect } from "react";
import { BlogCategory } from "../../utils/entitities";

import { projects } from "./projects";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const availableCategories: BlogCategory[] = Object.keys(BlogCategory) as BlogCategory[];



const ProjectView = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const [categories, setCategories] = useState<string[]>([]);
    const [filteredProjects, setFilteredProjects] = useState(projects);

    useEffect(() => {
        if (categories.length === 0) {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(
            projects.filter((project) =>
              categories.some((category) =>
                blog.categories.includes(BlogCategory[category as keyof typeof BlogCategory]),
              ),
            ),
          );
        }
      }, [categories]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    const handleChange = (event: SelectChangeEvent<string[]>) => {
        const {
          target: { value },
        } = event;
        setCategories(
          typeof value === 'string' ? value.split(',') : value,
        );
      };

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
                                    isTablet ? "h2": "h1"} fontWeight={"bold"}>My Projects</Typography>
                <Typography variant={isMobile ? "body1": 
                                    isTablet? "body1": "h3"}>
                    I am trying to document and share my journey in AI and Machine Learning
                </Typography>
                </Box>
            <Divider sx={{ width: '100%'}}></Divider>
            </Box>
            <Box display={"flex"} justifyContent={"center"} 
            sx={{
                backgroundColor: "white",
    
            }}>
            <FormControl sx={{ m: 2, width: "50%" }}>
        <InputLabel id="demo-multiple-name-label">Filter category</InputLabel>
        <Select
          labelId="filter.category"
          id="filter-category"
          multiple
          value={categories}
          onChange={handleChange}
          input={<OutlinedInput label="Filter category" />}
          MenuProps={MenuProps}
        >
          {availableCategories.map((name) => (
            <MenuItem
              key={name}
              value={name}
              
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
            </Box>
            <Box sx={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gridTemplateRows: "repeat(3, 1fr)",
                gap: theme.spacing(2),
            }}>
            {filteredProjects.map((project) => (
                <>
                               <Grow in={true} timeout={1000}>
                <Paper elevation={5} sx={{
                    ":hover": {
                        background: α("lightgray", 0.9),
                    },
                    cursor: "pointer",
                    display: "flex",
                    gridColumn: isMobile ? "span 3" : "span 3",
                    gridRow: "span 1",
                 
                    alignItems: "start",
                    justifyContent:"start",
                    borderRadius: "15px",
                    background: α("white", 0.8 ),
                }}>
                <ProjectTemplate {...project} />
                </Paper>
                </Grow> 
                </>
            ))}
            </Box>
        </Box>
    )
}

export default ProjectView