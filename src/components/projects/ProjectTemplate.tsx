import {Box, Typography, useTheme, Divider, useMediaQuery, CardActionArea, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { BlogCategory, TechStack } from "../../utils/entitities";

export interface ProjectTemplateProps {
  img: string;
  techStack: TechStack[];
  title: string;
  summary: string;
  categories: BlogCategory[]; 
  id: number
  link: string
  
} 

const CategoryBox: React.FC<{category: BlogCategory, variant: "body2" | "caption"}> = (props) => {
  return (
    <Button sx={{
      backgroundColor: "lightblue",
      borderRadius: "25px",
      padding: "2px",
      color: "white",
      margin: "0px",
    }}>
      <Typography  variant={props.variant}>{props.category}</Typography>
    </Button>
  )
}

const TechStackBox: React.FC<{tech: TechStack, variant: "body2" | "caption"}> = (props) => {
    return (
        <Button sx={{
        backgroundColor: "green",
        borderRadius: "25px",
        padding: "2px",
        color: "white",
        margin: "0px",
        }}>
        <Typography  variant={props.variant}>{props.tech}</Typography>
        </Button>
    )
    }

export const ProjectTemplate: React.FC<ProjectTemplateProps>= (props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, SetOpen] = React.useState(false);

    return (
      <>
      <Card sx={{minWidth:"100%", minHeight:"100%"}}>
        
        <CardMedia
          sx={{ height: 140 }}
          image={new URL( "/assets/" + props.img, import.meta.url).href }
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant={isMobile?  "h3" :  "h2"} component="div">
            {props.title}
          </Typography>
          <Divider/>
          <Box display={"flex"} marginBottom={"2%"}>
            <Box marginTop={"1%"}>
               
          <Typography variant="body1" color="text.secondary" textAlign={"justify"}>
            {props.summary}
          </Typography>
            </Box>
            </Box>
            <Divider/>
            <Box marginTop={"2%"}>
         
            <Box sx={{  
                display: "flex",
                flexDirection: "row",
                gap: theme.spacing(1),
              }}>
                {props.techStack.map((tech) => (
                <TechStackBox tech={tech} variant={isMobile ? "caption": "body2"}/>
                ))}
            </Box>
          </Box>
        </CardContent>
        <CardActions sx={{
            alignSelf: "flex-end"
        }}>
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Box>
          <Button size="small"onClick={() => SetOpen(true)
           }>
            <Typography variant={"body1"}>{`See ${props.link.includes("github") ? "more on Github" : props.link.includes("kaggle") ? "See more on Kaggle" : ""}`}</Typography>
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
      
      </Card>
      <Dialog
      open={open}
      onClose={() => SetOpen(false)}
      aria-labelledby="success-dialog-title"
      aria-describedby="success-dialog-description"
      >
      <DialogTitle id="success-dialog-title">{"Follow?"}</DialogTitle>
      <DialogContent>
          <DialogContentText id="success-dialog-description">
          {`You will follow an external link to 
          ${props.link.includes("github") ? "Github" : props.link.includes("kaggle") ? "Kaggle" : "" }`}
          
  
                 </DialogContentText>
      </DialogContent>
      <DialogActions>
          <Button onClick={() => SetOpen(false)} color="primary" autoFocus>
          Close
          </Button>
          <Button onClick={() => window.open(props.link, "_blank")} color="primary">
          Continue
          </Button>
      </DialogActions>
      </Dialog>
      </>
    );
}
