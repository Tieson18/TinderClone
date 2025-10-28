import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TinderCards from '../components/TinderCards'
import { collection, onSnapshot } from 'firebase/firestore';
import db from '../database/firebase';
import { SwipeButtons } from '../components/SwipeButtons';
import axios from '../../Backend/Api/axios';

export const Tinder = () => {
    const [people, setPeople] = useState([]);

    // useEffect(() => {
    //     // This is where the code to fetch data from Firebase will go
    //     const peopleDB = collection(db, "people");
    //     const unsubscribe = onSnapshot(peopleDB, (snapshot) => {
    //         setPeople(snapshot.docs.map(doc => doc.data()));
    //     });
    //     // Cleanup subscription on unmount
    //     return () => unsubscribe();
    // }, []);

    useEffect(() => {
        // This is where the code to fetch data from MongoDB will go
        const fetchData = async () => {
            try {
                const req = await axios.get('tinder/cards');
                console.log(req);
                setPeople(req.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <Box component="main">
            <TinderCards people={people} />
            <SwipeButtons />
        </Box>
    )
}
