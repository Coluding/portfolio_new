import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {ThemeProvider, CssBaseline } from "@mui/material";

import HomePage from './container/HomePage';
import BlogView from './components/blog/BlogView';
import MathBlog from './components/blog/BlogContent';
import ProjectView from './components/projects/ProjectView';
import theme from './utils/theme';

function App() {


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
