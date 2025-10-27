import React, { useEffect, useState } from 'react'
import { ArrowBackIos, Forum, Person } from '@mui/icons-material'
import { Box, IconButton, Stack } from '@mui/material'
import logo from '../assets/tinder-logo.svg'
import { Link, useNavigate } from 'react-router-dom'
const Header = ({ backButton, setBackButton }) => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
        setBackButton(false);
    }

    useEffect(() => {
        if (window.location.pathname !== '/') {
            setBackButton(true);
        } else {
            setBackButton(false);
        }
    }, [window.location.pathname]);

    return (
        <Box component={"header"}>
            <Stack direction={"row"} className='justify-between items-center border-b border-[#f9f9f9] z-50'>
                {backButton ? (
                    <IconButton className='p-5!' onClick={handleBackClick}><ArrowBackIos fontSize='large' /></IconButton>
                ) : (
                    <IconButton className='p-5!'><Person fontSize='large' /></IconButton>
                )}
                <Link to="/">
                    <img src={logo} alt="tinder logo" className='object-contain h-10' />
                </Link>
                <Link to="/chat">
                    <IconButton className='p-5!' onClick={() => setBackButton(true)} > <Forum fontSize='large' /></IconButton>
                </Link>
            </Stack>
        </Box >
    )
}

export default Header