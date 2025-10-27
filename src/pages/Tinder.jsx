import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TinderCards from '../components/TinderCards'
import { collection, onSnapshot } from 'firebase/firestore';
import db from '../database/firebase';
import { SwipeButtons } from '../components/SwipeButtons';

export const Tinder = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        // This is where the code to fetch data from Firebase will go
        const peopleDB = collection(db, "people");
        const unsubscribe = onSnapshot(peopleDB, (snapshot) => {
            setPeople(snapshot.docs.map(doc => doc.data()));
        });
        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    return (
        <Box component="main">
            <TinderCards people={people} />
            <SwipeButtons />
        </Box>
    )
}
