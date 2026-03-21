import React from 'react';
import { ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import menuConfig from '../../assets/configs/menuConfig';

const NavBarItems = ({ isDrawer, onClose }) => {
    const location = useLocation();

    return (
        <Box sx={{ 
            display: 'flex', 
            justifyContent: 'flex-start', 
            gap: 2, 
            overflowX: 'auto', 
            flexWrap: { xs: 'wrap', md: 'nowrap' },
            flexDirection: isDrawer ? 'column' : 'row',
            width: isDrawer ? '100%' : 'auto'
        }}>
            {menuConfig.sidebarData.map((item) => (
                <ListItem
                    button
                    component={Link}
                    to={item.path}
                    key={item.id}
                    onClick={onClose}
                    sx={{
                        color: location.pathname === item.path ? '#ffffff' : '#b0bec5',
                        display: 'flex',
                        alignItems: 'center',
                        padding: isDrawer ? '16px 24px' : 2,
                        borderBottom: (!isDrawer && location.pathname === item.path) ? '3px solid #ffffff' : 'none',
                        borderLeft: (isDrawer && location.pathname === item.path) ? '4px solid #1e88e5' : 'none',
                        backgroundColor: (isDrawer && location.pathname === item.path) ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.12)',
                        },
                        transition: 'all 0.3s ease',
                    }}
                >
                    <ListItemIcon sx={{ color: location.pathname === item.path ? '#ffffff' : '#b0bec5', minWidth: 40 }}>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title} primaryTypographyProps={{ fontWeight: location.pathname === item.path ? 'bold' : 'normal' }} />
                </ListItem>
            ))}
        </Box>
    );
};

export default NavBarItems;
