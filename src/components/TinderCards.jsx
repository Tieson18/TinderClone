import { Box, Stack, Typography } from '@mui/material';
import TinderCard from 'react-tinder-card';
const TinderCards = ({ people }) => {
    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    }
    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    }

    return (
        <Box component={"section"} >
            <Stack className='flex-row! justify-center mt-[5vh]!'>
                {people.map((person) => (
                    <TinderCard
                        className='absolute'
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <Stack
                            className='relative h-[58vh] w-[600px] max-w-[85vw] rounded-[20px] bg-cover bg-center p-5 shadow-2xl'
                            sx={{ backgroundImage: `url(${person.url})` }}
                        >
                            <Typography variant='h3' className='absolute bottom-2.5 left-2 text-white text-4xl!'>{person.name}</Typography>
                        </Stack>
                    </TinderCard>
                ))}
            </Stack>
        </Box>
    )
}

export default TinderCards