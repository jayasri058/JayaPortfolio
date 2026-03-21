import React from 'react';
import { Container, Grid2, Box, Typography } from '@mui/material';
// DynamicTyping component removed in favor of static chips
import About from '../../components/About';
import Timeline from '../../components/Timeline/Timeline';
import homeConfig from '../../assets/configs/homeConfig';

const Home = () => {
    return (
        <section>
            <Box sx={{ 
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', 
                pt: { xs: 8, md: 12 }, pb: { xs: 6, md: 8 }, 
                mb: 6, 
                borderRadius: { xs: '0 0 24px 24px', md: '0 0 48px 48px' }, 
                boxShadow: '0 20px 40px -10px rgba(15,23,42,0.3)' 
            }}>
                <Container maxWidth="xl" className="home-content" id="home">
                    <Grid2 container justifyContent="center" alignItems="center" className="home-header">
                        <Grid2 size={12} style={{ textAlign: 'center' }}>
                            <Typography variant="h1" sx={{ 
                                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' }, 
                                fontWeight: 800,
                                background: 'linear-gradient(90deg, #38bdf8, #818cf8)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}>
                                {homeConfig.greeting}
                            </Typography>
                            <Typography variant="h5" sx={{ color: '#cbd5e1', mt: 3, mb: 1, fontWeight: 400, fontSize: { xs: '1rem', md: '1.25rem' }, letterSpacing: 1, lineHeight: 1.6 }}>
                                {homeConfig.titles.join('  |  ')}
                            </Typography>
                            <Box sx={{ mt: 4 }}>
                                <About about={homeConfig.about} />
                            </Box>
                        </Grid2>
                    </Grid2>
                </Container>
            </Box>
            <Container maxWidth="xl" className="resume-content" id="resume" sx={{ mt: 6 }}>
                <Box sx={{ width: '100%', maxWidth: '960px', mx: 'auto' }}>
                    <Timeline items={homeConfig.workTimeline} />
                </Box>
            </Container>
        </section>
    );
}

export default Home;
