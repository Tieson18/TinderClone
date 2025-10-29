import { Box } from '@mui/material'
import React from 'react'
import { Chat } from '../components/Chat'
import { userData } from '../util/userData';

export const Chats = ({ setBackButton }) => {
    return (
        <Box component={"main"}>
            {userData.map((chatter, i) => (
                <Chat
                    key={i}
                    name={chatter.name}
                    message={chatter.message}
                    timestamp={chatter.timestamp}
                    profilePic={chatter.profilePic}
                    setBackButton={setBackButton}
                />
            ))}
        </Box>
    )
}
