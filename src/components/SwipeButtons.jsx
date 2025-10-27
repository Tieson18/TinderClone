import { Box, IconButton, Stack } from '@mui/material'
import React from 'react'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';

export const SwipeButtons = () => {
    const swipeButttons = [
        { icon: <ReplayIcon fontSize="large" />, color: "#f5b748" },
        { icon: <CloseIcon fontSize="large" />, color: "#ec5e6f" },
        { icon: <StarRateIcon fontSize="large" />, color: "#62b4f9" },
        { icon: <FavoriteIcon fontSize="large" />, color: "#76e2b3" },
        { icon: <FlashOnIcon fontSize="large" />, color: "#915dd1" },
    ];

    return (
        <Box component="section">
            <Stack
                direction="row"
                className='fixed bottom-[8vh] justify-evenly w-full'
            >
                {swipeButttons.map(({ icon, color }, i) => (
                    <IconButton
                        key={i}
                        component="button"
                        className={`shadow-color bg-white! text-[${color}]! p-[3vw]! hover:scale-110 transition-transform duration-200`}
                    >
                        {icon}
                    </IconButton>
                ))}
            </Stack>
        </Box>
    )
}
