import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const About = (props) => {
  const { about } = props || {};
  const { start, exit } = about || {};

  return (
      <Box id="about" sx={{ my: 4, maxWidth: '800px', mx: { xs: 2, md: 'auto' } }}>
        <Card sx={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.05)', 
            backdropFilter: 'blur(12px)', 
            border: '1px solid rgba(255,255,255,0.1)', 
            borderRadius: '24px', 
            color: '#f8f9fa', 
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)'
        }}>
          <CardContent sx={{ padding: { xs: 2, md: 5 }, textAlign: 'center' }}>
            <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.15rem' }, lineHeight: 1.8, mb: 3, fontWeight: 300, color: '#e2e8f0' }}>
              {start}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.15rem' }, lineHeight: 1.8, fontWeight: 300, color: '#e2e8f0' }}>
              {exit}
            </Typography>
          </CardContent>
        </Card>
      </Box>
  );
};

export default About;
