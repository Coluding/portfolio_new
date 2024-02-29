import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {ThemeProvider, CssBaseline } from "@mui/material";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';



import HomePage from './container/HomePage';
import BlogView from './components/blog/BlogView';
import MathBlog from './components/blog/BlogContent';
import ProjectView from './components/projects/ProjectView';
import theme from './utils/theme';


const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);
};


function App() {
  useEffect(() => {
    ReactGA.initialize('G-TKJW5X955X');
  }, []);

  usePageTracking();

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<MathBlog />} />
        <Route path="/blog" element={<BlogView />} />
        <Route path="/projects" element={<ProjectView />} />
      </Routes>
    </Router>
    </ThemeProvider>
  )
}

export default App
