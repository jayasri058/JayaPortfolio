import React from 'react';
import { Container, Box } from '@mui/material';
import FooterItems from './FooterItems';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#0f172a', width: '100%', position: 'relative', mt: 6, pt: 2, pb: 4 }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', py: 2, color: '#f5f5f5' }}>
                    <FooterItems />
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;
