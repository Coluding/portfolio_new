import { useState, useEffect } from 'react';
import { Box, Paper, Grow,Fade,  Button } from '@mui/material';
import {useMediaQuery} from '@mui/material';
import {Link} from 'react-scroll';
import { useTheme } from '@mui/material';
import α from 'color-alpha';
import { TypeAnimation } from 'react-type-animation';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import BlogHome from '../components/BlogHome';
import ProjectsHome from '../components/ProjectsHome.js';
import Contact from '../components/Contact';
import {ResponsiveBox} from '../components/ResponsiveElements.js';
import background from "../assets/networking_video.mp4";

const HomePage = () => {
    const theme = useTheme();
    const [opacity, setOpacity] = useState<number>(1);
    const [displayAbout, setDisplayAbout] = useState<boolean>(false);
    const [displaySkills, setDisplaySkills] = useState<boolean>(false);
    const [displayBlog, setDisplayBlog] = useState<boolean>(false);
    const devWidth = 1522;
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;
    const widthRatio = devWidth / displayWidth;
    const offset = -window.innerHeight * 0.1;

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
    const opacityFactor = isLarge ? 1.5 : 1;

    useEffect(() => {
        console.log(displayWidth)
        const handleScroll = () => {
            const currentScroll = window.scrollY * widthRatio;
            const newOpacity = 1 - ((currentScroll * opacityFactor) / displayHeight) ;
            console.log("opacity", newOpacity)
            setOpacity(newOpacity);
        };
       

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        console.log(opacity)
        const threshold = isMobile ? -0.5: 0.1;
        if (opacity < threshold){
            setDisplayAbout(true)
            
        } else {
            setDisplayAbout(false)
        }
    }, [opacity]);

    useEffect(() => {
        const threshold = isMobile ?  -2: -0.3;
        if (opacity < threshold){
            setDisplaySkills(true)
           

        } else {
            setDisplaySkills(false)
         
        }
    }, [opacity]);

    useEffect(() => {
        const threshold = isMobile ? -4: -0.8;
        if (opacity < threshold){
            setDisplayBlog(true)
        } else {
            setDisplayBlog(false)
        }
    }, [opacity]);

    return (
        <Box sx={{
            background:"white"
        }}>
            {!false &&
            <ResponsiveBox sx={{
                 opacity: opacity,
                
            }}>
                
                <video className='videoTag'
                    style={{
                        height: "100vh", width: "100vw", objectFit: "cover",
                        position: "absolute", top: 0, left: 0, opacity: 0.9,
                        overflow: "hidden", zIndex: -2
                    }}
                    loop={true} muted={true} autoPlay={true} playsInline={true}>
                    <source src={background} type='video/mp4' />
                </video>

                <Grow in={true} timeout={1000}>
                    <Box display={"flex"} alignItems={"center"}>
                        <Paper elevation={20} 
                            sx={{ 
                                margin: 'none', 
                                fontSize: isMobile ? "50%" : "60%",
                                maxWidth: isMobile ? "30vh" : "50vh",
                                paddingLeft: '1rem', 
                                paddingRight: '0.5rem',
                                paddingTop: '1rem',
                                paddingBottom: '0.5rem',  
                                color: "black",
                                background: α("white", 0.8 ),
                                borderRadius: '15px', 
                            }}>
                            <Box borderBottom={"0px solid grey"} display={"flex"} alignItems={"center"}
                                marginBottom={"1%"}>
                                <TypeAnimation 
                                    sequence={[
                                        'Hi, I am Lukas!',
                                        300, 
                                        'Hi, I am Lukas!\nMachine Learning Researcher and Full Stack Developer.',
                                        300,
                                        'Hi, I am Lukas!\nMachine Learning Researcher and Full Stack Developer.\n Welcome to my portfolio!'
                                    ]}
                                    wrapper="span"
                                    speed={65}
                                    style={{ fontSize: '2em', display: 'inline-block' }}
                                />
                            </Box>
                        </Paper>
                    </Box>
                </Grow>
            </ResponsiveBox>
                                }
    
            <Box sx={{ flexGrow: 1, 
            mt: "100vh", // Offset by the height of the upper box
            zIndex: 1, // Ensure this is below the upper box initially
            opacity: 1 - opacity, // This will ensure it starts becoming visible as you scroll
            transition: 'opacity 0.5s ease-out',
            background: theme.palette.background.default,}}
            height={"100vh"}
                
           >    
           <Box position={"fixed"} zIndex={10}
           sx={{
                width: "100%",
                maxWidth: "100%",
                background: α("black", 0.9),
                backdropFilter: "blur(10px)",
                color: "white",
                padding: "10px",
                top: 0,
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.75)",
                zIndex: 10
              
           }}
           >
                        <Box display={"flex"} justifyContent={"space-between"} flexGrow={1} color={"white"}>
                        <Link to="aboutMe" smooth={true} duration={1000} color="white"  offset={offset}>
                        <Button sx={{
                            color: "white",
                            "&:hover": {
                                color: "black",
                                backgroundColor: "white"
                            },
                            fontSize: isMobile ? theme.typography.h2.fontSize : theme.typography.body1.fontSize
                        }} >About Me</Button>
                        </Link>
                        <Link to="skills" smooth={true} duration={1000} color="white"  offset={offset}>
                        <Button sx={{
                            color: "white",
                            "&:hover": {
                                color: "black",
                                backgroundColor: "white"
                            },
                            fontSize: theme.typography.body1.fontSize
                        }} >Skills</Button>
                        </Link>
                        <Link to="blog" smooth={true} duration={1000} color="white" offset={offset}>
                        <Button sx={{
                            color: "white",
                            "&:hover": {
                                color: "black",
                                backgroundColor: "white"
                            },
                            fontSize: theme.typography.body1.fontSize
                        }} >Blog</Button>
                        </Link>
                        <Link to="projects" smooth={true} duration={1000} color="white"  offset={offset}>
                        <Button sx={{
                            color: "white",
                            "&:hover": {
                                color: "black",
                                backgroundColor: "white"
                            },
                            fontSize: theme.typography.body1.fontSize
                        }} >Projects</Button>
                        </Link>
                    
                     
                        <Link to="contact" smooth={true} duration={1000} color="white"  offset={offset}>
                        <Button sx={{
                            color: "white",
                            "&:hover": {
                                color: "black",
                                backgroundColor: "white"
                            },
                            fontSize: theme.typography.body1.fontSize
                        }} >Contact</Button>
                        </Link>
                        </Box>
    
                </Box>
                
                <Box sx={{ 
                    marginTop: `${1/widthRatio * 200}px`,
                     color:  theme.palette.text.primary,
                      height:"100h",
                    zIndex: 9,
                    background: "white"}} 
                position={"absolute"}>
                  
                    <Fade in={displayAbout} timeout={1500}>
                    <Box id="aboutMe">
                    <AboutMe/>
                    </Box>
                    </Fade>
                    <Box id="skills" marginTop={"10%"}>
                        {undefined}
                    </Box>
                    <Fade in={displaySkills} timeout={1500}>
                    <Box marginTop={"0%"}>  
                    <Skills/>
                    </Box>
                    </Fade>
                    <Box id="blog" marginTop={"5%"}>
                        {undefined}
                    </Box>
                    <Fade in={displayBlog} timeout={1500}>
                    <Box marginTop={"0%"} >
                    <BlogHome/>
                    </Box>
                    </Fade>
                  
                    <Fade in={displayBlog} timeout={1500}>
                    <Box id="projects" marginTop={"0%"} >
                    <ProjectsHome/>
                    </Box>
                    </Fade>
                    <Fade in={displayBlog} timeout={1500}>
                    <Box id="contact" marginTop={"0%"} >
                    <Contact/>
                    </Box>
                    </Fade>
                    </Box>                      
            </Box>
        </Box>
    );
};

export default HomePage;
