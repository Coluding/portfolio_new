import {Box, Typography, useTheme, useMediaQuery, CardActionArea} from "@mui/material";
import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { BlogCategory } from "../../utils/entitities";

export interface BlogTemplateProps {
  img: string;
  title: string;
  summary: string;
  categories: BlogCategory[]; 
  content : string;
  id: number
} 

const CategoryBox: React.FC<{category: BlogCategory, variant: "body2" | "caption"}> = (props) => {
  return (
    <Button sx={{
      backgroundColor: "lightblue",
      borderRadius: "25px",
      padding: "2px",
      paddingLeft: "2%",
      color: "white",
      margin: "0px",
    }}>
      <Typography  variant={props.variant}>{props.category}</Typography>
    </Button>
  )
}

export  const BlogTemplate: React.FC<BlogTemplateProps>= (props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate();

    return (
      <Card sx={{minWidth:"100%", minHeight:"100%"}}>
        <CardActionArea onClick={() => navigate("/blog/" + props.id)}>
        <CardMedia
          sx={{ height: 140 }}
          image={new URL( "/assets/" + props.img, import.meta.url).href }
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant={isMobile?  "h3" :  "h2"} component="div">
            {props.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {props.summary}
          </Typography>
        </CardContent>
        <CardActions>
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Box>
          <Button size="small" onClick={() => navigate("/blog/" + props.id)}>
            <Typography variant={"body1"}>Read  More</Typography>
            {!isMobile && <ArrowForwardIcon fontSize="small"/>}
          </Button>
          </Box>
          <Box sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: theme.spacing(1),
          }}>
            {props.categories.map((category) => (
              <CategoryBox category={category} variant={isMobile ? "caption": "body2"}/>
            ))}
          </Box>
          </Box>
        </CardActions>
        </CardActionArea>
      </Card>
    );
}
