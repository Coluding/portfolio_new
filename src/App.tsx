import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {ThemeProvider, CssBaseline } from "@mui/material";
import AnimatedCursor from "react-animated-cursor"


import HomePage from './container/HomePage';
import BlogView from './components/blog/BlogView';
import MathBlog from './components/blog/BlogContent';
import ProjectView from './components/projects/ProjectView';
import PaperView from './components/paper/PaperView';
import theme from './utils/theme';

function App() {
  
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <AnimatedCursor
      innerSize={15}
      outerSize={15}
      color='0, 0, 0'
      outerAlpha={0.2}
      innerScale={1.2}
      outerScale={2}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        '.button',
      ]}
    />
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<MathBlog />} />
        <Route path="/blog" element={<BlogView />} />
        <Route path="/papers" element={<PaperView />} />
        <Route path="/projects" element={<ProjectView />} />
      </Routes>
    </Router>
    </ThemeProvider>
  )
}

export default App
