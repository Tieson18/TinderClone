import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Chat = ({ name, message, timestamp, profilePic, setBackButton }) => {
    return (
        <Box component={"article"}>
            <Link to={`/chat/${name}`}>
                <Stack onClick={() => setBackButton(true)} className='flex-row! justify-between items-center p-5! border-b border-[#fafafa]'>
                    <Avatar src={profilePic} alt={name} className='mr-5!' />
                    <Stack flex={1}>
                        <Typography variant='h2' className='text-2xl! font-semibold!'>{name}</Typography>
                        <Typography className='text-sm! text-gray-500'>{message}</Typography>
                    </Stack>
                    <Typography className='text-sm! text-gray-300'>{timestamp}</Typography>
                </Stack>
            </Link>
        </Box>
    )
}
