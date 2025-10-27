import { Avatar, Box, Button, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { userData } from '../util/userData';

export const ChatScreen = () => {
    const [input, setInput] = useState("");
    const [message, setMessage] = useState([{
        name: "Jane Doe",
        message: "Hey! How are you?",
        timestamp: "2 hours ago",
        profilePic: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
        message: "Hi! I'm good, thanks for asking. How about you?",
    },
    {
        name: "Jane Doe",
        message: "Hey! How are you?",
        timestamp: "2 hours ago",
        profilePic: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
        message: "Hey! How are you?",
    }]);
    const [userPic, setUserPic] = useState("");

    // const message = [
    //     {
    //         name: "Jane Doe",
    //         message: "Hey! How are you?",
    //         timestamp: "2 hours ago",
    //         profilePic: userPic
    //     },
    //     {
    //         message: "Hi! I'm good, thanks for asking. How about you?",
    //     },
    //     {
    //         name: "Jane Doe",
    //         message: "Hey! How are you?",
    //         timestamp: "2 hours ago",
    //         profilePic: userPic
    //     },
    //     {
    //         message: "Hey! How are you?",
    //     }
    // ];
    const { person } = useParams();

    const handleSend = (e) => {
        e.preventDefault();
        if (input.trim() === "")
            return;
        setMessage([...message, { message: input }]);
        setInput("");
    }

    useEffect(() => {
        userData.filter(user => {
            if (user.name === person) {
                setUserPic(user.profilePic);
            }
        });
    }, [person]);

    return (
        <Box component={"main"}>
            <Stack mb={5}>
                <Typography className='uppercase text-md! text-center p-5! text-gray-500'>You matched with {person} on 10/08/25</Typography>
                {message.map((msg, i) => (
                    <Stack key={i} >
                        {msg.name ? (
                            <Stack className='flex-row! items-center p-5!'>
                                <Avatar
                                    src={msg.profilePic}
                                    alt={msg.name}
                                />
                                <Typography className='bg-gray-300 text-sm! p-[15px]! rounded-[20px] ml-2.5!' >{msg.message}</Typography>
                            </Stack>
                        ) : (
                            <Stack className='p-5!'>
                                <Typography className='bg-[#29b3cd] text-sm! text-white ml-auto! p-[15px]! rounded-[20px]'>{msg.message}</Typography>
                            </Stack>
                        )}
                    </Stack>
                ))}
            </Stack>
            <form action="submit">
                <Stack className='flex-row! p-1.5! fixed bottom-0 w-full items-center border-t border-gray-200 bg-white'>
                    <input
                        className='flex-1 p-2.5! border-none'
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder='Type a message...'
                    />
                    <Button type='submit' onClick={handleSend} variant='text' className='mr-5! font-bold! text-[#fe3d71]!'>SEND</Button>
                </Stack>
            </form>
        </Box>
    )
}
