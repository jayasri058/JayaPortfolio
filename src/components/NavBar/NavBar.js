import React, { useState } from 'react';
import { AppBar, Toolbar, Box, IconButton, Drawer, useMediaQuery, useTheme, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavBarItems from './NavBarItems';

const NavBar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <AppBar position="fixed" sx={{ backgroundColor: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(12px)', zIndex: 1400, boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <Toolbar sx={{ justifyContent: isMobile ? 'space-between' : 'start' }}>
                    {isMobile ? (
                        <>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ color: '#f5f5f5' }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                anchor="left"
                                open={mobileOpen}
                                onClose={handleDrawerToggle}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                }}
                                sx={{
                                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280, backgroundColor: '#0f172a' },
                                }}
                            >
                                <Box sx={{ pt: 4, pb: 2, display: 'flex', flexDirection: 'column' }}>
                                    <Typography variant="h6" sx={{ color: '#ffffff', pl: 3, pb: 2, fontWeight: 'bold', letterSpacing: 1 }}>Menu</Typography>
                                    <NavBarItems isDrawer={true} onClose={handleDrawerToggle} />
                                </Box>
                            </Drawer>
                        </>
                    ) : (
                        <NavBarItems />
                    )}
                </Toolbar>
            </AppBar>
            <Box sx={{ height: 64 }} />
        </>
    );
};

export default NavBar;
