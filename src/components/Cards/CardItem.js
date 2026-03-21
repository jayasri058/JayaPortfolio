import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import CardIcons from './CardIcons';

const CardItem = (props) => {
    return (
        <Card sx={{ 
            width: '100%', maxWidth: 380, height: 450, m: { xs: '2rem 1rem', sm: 2 }, 
            backgroundColor: '#ffffff', 
            borderRadius: '16px',
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)', 
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.15)',
            }
        }}>
            <CardMedia
                component="div"
                sx={{
                    backgroundImage: `url(${props.item.image})`,
                    height: { xs: 180, sm: 220 }, 
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    my: 1
                }}
                alt={props.item.title}
            />
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="div" textAlign="center">
                        <strong>{props.item.title}</strong>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" textAlign="center" sx={{ mt: 1 }}>
                        {props.item.description}
                    </Typography>
                </Box>
                <Box sx={{ borderTop: 1, borderColor: 'divider', my: 1 }} />
                <CardIcons item={props.item} sx={{ py: 0.3 }} />
            </CardContent>
        </Card>
    );
}

export default CardItem;
