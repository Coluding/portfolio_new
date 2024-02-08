import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {ThemeProvider, CssBaseline } from "@mui/material";

import HomePage from './container/HomePage';
import theme from './utils/theme';

function App() {


  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
    </ThemeProvider>
  )
}

export default App
