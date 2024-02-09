import { useState, useEffect } from 'react';
import { Box, Paper, Grow, Toolbar, AppBar,Fade,  Button } from '@mui/material';
import {useMediaQuery} from '@mui/material';
import {Link} from 'react-scroll';
import { useTheme } from '@mui/material';
import α from 'color-alpha';
import { TypeAnimation } from 'react-type-animation';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import BlogHome from '../components/BlogHome';
import ProjectsHome from '../components/ProjectsHome.js';
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

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        console.log(displayWidth)
        const handleScroll = () => {
            const currentScroll = window.scrollY * widthRatio;
            let newOpacity = 1 - currentScroll / displayHeight;
            setOpacity(newOpacity);
        };
       

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        console.log(opacity)
        const threshold = isMobile ? 0.12 : 0.01;
        if (opacity < threshold){
            setDisplayAbout(true)
            
        } else {
            setDisplayAbout(false)
        }
    }, [opacity]);

    useEffect(() => {
        const threshold = isMobile ? 0.09 : -0.1;
        if (opacity < threshold){
            setDisplaySkills(true)
           

        } else {
            setDisplaySkills(false)
         
        }
    }, [opacity]);

    useEffect(() => {
        const threshold = isMobile ? -0.1 : -1.5;
        if (opacity < threshold){
            setDisplayBlog(true)
        } else {
            setDisplayBlog(false)
        }
    }, [opacity]);

    return (
        <Box>
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
                    autoPlay loop muted>
                    <source src={background} type='video/mp4' />
                </video>

                <Grow in={true} timeout={1000}>
                    <Box display={"flex"} alignItems={"center"}>
                        <Paper elevation={20} 
                            sx={{ 
                                margin: 'none', 
                                
                                fontSize: isMobile ? theme.typography.caption.fontSize : theme.typography.body2.fontSize,
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
                                marginBottom={"30px"}>
                                <TypeAnimation
                                    sequence={[
                                        'Hi, I am Lukas!',
                                        300, 
                                        'Hi, I am Lukas!\nMachine Learning Engineer and Full Stack Developer.',
                                        300,
                                        'Hi, I am Lukas!\nMachine Learning Engineer and Full Stack Developer.\n Welcome to my portfolio!'
                                    ]}
                                    wrapper="span"
                                    speed={50}
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
           <Box position={"fixed"} zIndex={10}>
                <AppBar>
                    <Toolbar>
                        <Box display={"flex"} justifyContent={"space-between"} flexGrow={1} color={"white"}>
                        <Link to="aboutMe" smooth={true} duration={1000} color="white">
                        <Button sx={{
                            color: "white",
                            "&:hover": {
                                color: "black",
                                backgroundColor: "white"
                            }
                        }} >About Me</Button>
                        </Link>
                        <Link to="skills" smooth={true} duration={1000} color="white">
                        <Button sx={{
                            color: "white",
                            "&:hover": {
                                color: "black",
                                backgroundColor: "white"
                            }
                        }} >Skills</Button>
                        </Link>
                        <Link to="blog" smooth={true} duration={1000} color="white">
                        <Button sx={{
                            color: "white",
                            "&:hover": {
                                color: "black",
                                backgroundColor: "white"
                            }
                        }} >Blog</Button>
                        </Link>
                        <Button color="inherit">Projects</Button>
                        <Button color="inherit">Socials</Button>
                        <Button color="inherit">Resume</Button>
                        <Button color="inherit">Contact</Button>
                        </Box>
                    </Toolbar>
                </AppBar>   
                </Box>
                
                <Box sx={{ 
                    marginTop: `${1/widthRatio * 200}px`,
                     color:  theme.palette.text.primary,
                      height:"100h",
                    zIndex: 9,}} 
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
                    <Box id="blog" marginTop={"5%"}>
                        {undefined}
                    </Box>
                    <Fade in={displayBlog} timeout={1500}>
                    <Box marginTop={"0%"} >
                    <ProjectsHome/>
                    </Box>
                    </Fade>
                    </Box>                      
            </Box>
        </Box>
    );
};

export default HomePage;
