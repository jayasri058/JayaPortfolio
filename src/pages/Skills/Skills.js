import React from 'react';
import { Box, Typography } from '@mui/material';
import SkillsItems from './SkillsItems';
import skillsConfig from '../../assets/configs/skillsConfig';

const Skills = () => {
    return (
        <section id="skills">
            <Box sx={{ mx: { xs: 2, md: 0 }, textAlign: 'center', p: { xs: 3, md: 5 }, backgroundColor: '#ffffff', borderRadius: '24px', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.08)', mb: 6, transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-4px)' } }}>
                <Typography variant="h3" component="h1" sx={{ color: '#263238', py: 2, fontSize: { xs: '1.75rem', md: '3rem' } }}>
                    <strong>Main Skills & Tools</strong>
                </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                        <SkillsItems config={skillsConfig.mainSkills} />
                    </Box>

            </Box>

            <Box sx={{ mx: { xs: 2, md: 0 }, textAlign: 'center', p: { xs: 3, md: 5 }, backgroundColor: '#ffffff', borderRadius: '24px', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.08)', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-4px)' } }}>
                <Typography variant="h3" component="h1" sx={{ color: '#263238', py: 2, fontSize: { xs: '1.75rem', md: '3rem' } }}>
                    <strong>Complementary Skills & Tools</strong>
                </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                        <SkillsItems config={skillsConfig.complementarySkills} />
                    </Box>
            </Box>
        </section>
    );
}

export default Skills;

