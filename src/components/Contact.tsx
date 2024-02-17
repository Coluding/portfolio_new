import { Paper,Box, useTheme,
     useMediaQuery,  TextField, Button, Divider, Typography, Container, Grid,
     Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { Formik } from "formik";
import emailjs from '@emailjs/browser';
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useState } from "react";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faKaggle } from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Contact = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [success, setSuccess] = useState(false)
    const [fail, setFail] = useState(false)
    
    const [linkedinHover, setLinkedinHover] = useState(false)
    const [githubHover, setGithubHover] = useState(false)
    const [kaggleHover, setKaggleHover] = useState(false)

    const handleSubmit = (values: any, { setSubmitting, resetForm } : any) => {
            try {
              emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                values,
                import.meta.env.VITE_EMAILJS_PUBLIC_ID
              )
                resetForm()
                setSuccess(true)
               
        
            } catch (error) {
              console.log(error)
            }
            finally{
                setSubmitting(false)
                
            }
          };

    
      return (
        <Box sx={{
            pb: 10,
            display:"grid",
            gridTemplateColumns: "repeat(4, 1fr)",
        }}>
            <Box sx={{
            gridColumn: "span 4",
            gridRow: "span 1",
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
            padding: 2,
            }}>
            <Divider sx={{ width: '100%'}}>Contact and Socials</Divider>
            </Box>
        <Box display={"flex"}  gridColumn={isMobile ? "span 4" : "span 1"} gridRow={"span 4"}
        sx={{
        
            alignItems: "center",
            flexDirection: "column",
            justifyContent:"space-around",
            padding: theme.spacing(2),
          
            gap: theme.spacing(2),
            textAlign: "center",
        
        }}>
               <Box display={"flex"} flexDirection={isMobile ? "row": "column"} gap={"10%"} 
               justifyContent={isMobile ? "space-between" : ""}>
                <Box>
                <Link to={"https://www.linkedin.com/in/lukas-bierling-a2a6a4201/"} target="_blank">
                    <FontAwesomeIcon icon={faLinkedin}
                    onMouseEnter={() => setLinkedinHover(true)}
                    onMouseLeave={() => setLinkedinHover(false)}
                    bounce={linkedinHover}
                    
                    style={
                        {width:"30%",
                        height:"30%",
                        color:"black"}}/>
                </Link>
                <Typography variant="h3">LinkedIn</Typography>
                </Box>
                <Box>
                <Link to={"https://github.com/Coluding"} target="_blank">
                    <FontAwesomeIcon icon={faGithub}
                    onMouseEnter={() => setGithubHover(true)}
                    onMouseLeave={() => setGithubHover(false)}
                    bounce={githubHover}
                    style={
                        {width:"30%",
                        height:"30%",
                        color:"black"}}/>
                </Link>
                <Typography variant="h3">Github</Typography>
                </Box>

                <Box >
                <Link to={"https://www.kaggle.com/strangetravel"} target="_blank">
                    <FontAwesomeIcon icon={faKaggle}
                    onMouseEnter={() => setKaggleHover(true)}
                    onMouseLeave={() => setKaggleHover(false)}
                    bounce={kaggleHover}
                    style={
                        {width:"30%",
                        height:"30%",
                        color:"black"}}/>
                </Link>
                <Typography variant="h3">Kaggle</Typography>
                </Box>
               </Box>
        </Box>
            <Box gridColumn={isMobile ? "span 4" : "span 3"} 
            display={"flex"} 
            flexDirection={"column"}
            justifyContent={"end"}>
             
        <Container maxWidth="sm" sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "flex-end",
            flexDirection: "column",
            gap: "5%"
        
        }}>
          <Paper elevation={3} sx={{ p: 4, marginTop: 0, background:"white", width:"100%" }}>
            <Box display={"flex"} alignItems={"center"}>
            <Typography variant="h6" gutterBottom>
              Lets get in touch!
            </Typography>
            </Box>
            <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        style={{
          display:"flex",
          flexDirection:"column",
          justifyContent:"space-between"
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Name*"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                rows={4}
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                InputLabelProps={{
                  style: { color: touched.name && errors.name ? 'red' : "gray" }
              }}
             
              />
                 
                </Grid>
                <Grid item xs={12}>
                <TextField
                fullWidth
                variant="outlined"
            
                type="text"
                rows={4}
                label="Email*"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                autoComplete='email'
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                InputLabelProps={{
                  style: { color: touched.email && errors.email ? 'red' : "gray" }
              }}
             
              />
                </Grid>
                <Grid item xs={12}>
                <TextField
                fullWidth
                multiline
                variant="outlined"
                type="text"
                label="Message*"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.message}
                name="message"
                rows={8}
                autoComplete='message'
                error={!!touched.message && !!errors.message}
                helperText={touched.message && errors.message}
                InputLabelProps={{
                  style: { color: touched.message && errors.message ? 'red' : "gray" }
              }}
             
              />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" fullWidth variant="contained" color="primary">
                    Send
                  </Button>
                </Grid>
              </Grid>
            </form>
            )}
            </Formik>
          </Paper>
        </Container>
        </Box>
        <Dialog
            open={success}
            onClose={() => setSuccess(false)}
            aria-labelledby="success-dialog-title"
            aria-describedby="success-dialog-description"
            >
            <DialogTitle id="success-dialog-title">{"Success"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="success-dialog-description">
                Your message has been successfully sent. I will contact you soon!
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setSuccess(false)} color="primary" autoFocus>
                Close
                </Button>
            </DialogActions>
            </Dialog>
            <Dialog
                open={fail}
                onClose={() => setFail(false)}
                aria-labelledby="failure-dialog-title"
                aria-describedby="failure-dialog-description"
                >
                <DialogTitle id="failure-dialog-title">{"Failed to Send Message"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="failure-dialog-description">
                    Unfortunately, there was a problem sending your message. Please try again later.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setFail(false)} color="primary" autoFocus>
                    Close
                    </Button>
  </DialogActions>
</Dialog>

        </Box>
      );
    }
    
const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Enter a valid email").required("Email is required"),
    message: yup.string().required("Message is required"),
  });
  

const initialValues = {
    name: "",
    email: "",
    message: "",
    
}

  

export default Contact

    