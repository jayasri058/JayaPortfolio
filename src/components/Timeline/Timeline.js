import React from 'react';
import { Paper, Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from '@mui/lab';
import Tags from '../Tags/Tags';

const CustomTimeline = (props) => {
    const { items } = props || {};
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Timeline 
            position={isMobile ? "right" : "alternate"} 
            sx={{ 
                p: { xs: 0, md: 2 },
                ...(isMobile && {
                    [`& .MuiTimelineItem-root:before`]: {
                        flex: 0,
                        padding: 0,
                    }
                })
            }}
        >
            {items.map((item) => {
                const { id, date, icon, title, company, description, tags } = item || {};
                return (
                    <TimelineItem key={id}>
                        <TimelineOppositeContent sx={{ m: 'auto 0', display: { xs: 'none', md: 'block' } }} variant="body2" color="textSecondary">
                            {date}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot sx={{ backgroundColor: '#263238', width: 48, height: 48, border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Box sx={{ fontSize: '24px', color: '#FFFFFF' }}>
                                    {icon}
                                </Box>
                            </TimelineDot>
                            <TimelineConnector sx={{ backgroundColor: '#263238' }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: { xs: 1, md: 2 } }}>
                            <Paper
                                sx={{
                                    p: 3,
                                    backgroundColor: '#ffffff',
                                    borderRadius: '16px',
                                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-6px)',
                                        boxShadow: '0 20px 40px -10px rgba(0,0,0,0.15)',
                                    }
                                }}>
                                {isMobile && (
                                    <Typography variant="overline" sx={{ color: '#1e88e5', fontWeight: 600, display: 'block', textAlign: 'center', mb: 1, fontSize: '0.85rem' }}>
                                        {date}
                                    </Typography>
                                )}
                                <Typography variant="h5" component="h1" sx={{ color: '#263238', textAlign: 'center', mb: 1, fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>
                                    {title}
                                </Typography>
                                <Typography variant="subtitle2" sx={{ textAlign: 'center', fontFamily: 'Open Sans, sans-serif', color: '#757575' }}>
                                    {company}
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2, mt: 1.5, fontFamily: 'Open Sans, sans-serif', color: '#424242', textAlign: 'justify' }}>
                                    {description}
                                </Typography>
                                <Tags id={id} tags={tags} />
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                );
            })}
        </Timeline>
    );
};

export default CustomTimeline;
