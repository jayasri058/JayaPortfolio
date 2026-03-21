import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import ReactGA from 'react-ga';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills/Skills';
import Blogs from './pages/Blogs';
import Footer from './components/Footer/Footer';
import './App.css';

import React from 'react';

if (typeof process.env.REACT_APP_TRACKING_ID !== 'undefined') {
    ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);
}

function App() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Router>
                <NavBar />
                <Container sx={{ flex: 1, py: 3 }}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/portfolio" replace />} />
                        <Route path="/portfolio" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/skills" element={<Skills />} />
                    </Routes>
                </Container>
                <Footer />
            </Router>
        </Box>
    );
}

export default App;
