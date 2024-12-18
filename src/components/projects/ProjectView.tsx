import { Box, useTheme, Divider, Typography,Chip,  TextField, Grow, Paper, Autocomplete , useMediaQuery } from "@mui/material";
import α from 'color-alpha';
import { useLocation } from 'react-router-dom';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { ProjectTemplate } from "./ProjectTemplate";
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
    const [titles, setTitles] = useState<string[]>([]);
    const [filteredProjects, setFilteredProjects] = useState(projects);

    const location = useLocation();

    useEffect(() => {
      if (location.state?.initialCategories) {
        setCategories(location.state.initialCategories);
      }
    }, [location]);

    

    useEffect(() => {
        if (categories.length === 0) {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(
            projects.filter((project) =>
              categories.some((category) =>
                project.categories.includes(BlogCategory[category as keyof typeof BlogCategory]),
              ),
            ),
          );
        }
      }, [categories]);
    
      useEffect(() => {
        if (categories.length === 0 && titles.length === 0) {
          setFilteredProjects(projects);
        } else {
          setFilteredProjects(
            projects.filter((project) =>
              (titles.length === 0 || titles.some(title => project.title === title)),
            ),
          );
        }
      }, [titles])

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

      const handleChangeTitle = (event: any, newValue: any) => {
        event
        setTitles(newValue);
      }
    
    

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
                    Accompany me on my journey through AI, Machine Learning and Software Development
                </Typography>
                </Box>
            <Divider sx={{ width: '100%'}}></Divider>
            </Box>
            <Box display={"flex"} justifyContent={"space-evenly"} 
            sx={{
                backgroundColor: "white",
    
            }}>
               <FormControl sx={{ m: 2, width: "50%" }}>
       
               <Autocomplete
  multiple
  id="filter-category"
  options={filteredProjects.map((project) => project.title)}
  getOptionLabel={(option) => option}
  value={titles}
  onChange={handleChangeTitle}
  filterSelectedOptions
  renderTags={(value, getTagProps) =>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', overflowX: 'auto' }}>
      {value.map((option, index) => (
        <Chip
          variant="outlined"
          label={option}
          {...getTagProps({ index })}
          // Adjust the Chip style as needed, considering the container's new behavior
          style={{ fontSize: '0.875rem', height: 'auto', maxWidth: '100%' }}
        />
      ))}
    </div>
  }
  renderInput={(params) => (
    <TextField
      {...params}
      label="Search title"
      placeholder="Search title"
    />
  )}
/>
      </FormControl>
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
                    gridColumn: (isMobile || isTablet) ? "span 6" : "span 3",
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