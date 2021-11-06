import { Container, Box, Heading } from '@chakra-ui/react';
import React from 'react';



const DatastructuresFrontpage = () => {
    return(
        <Container
        w="full"
        h="100vh"
        padding="0"
        maxWidth="full"
        max>
            <Box 
            bg="white"
            color="black"
            textAlign="center"
            w="full"
            h="100vh"
            >
                <Heading mt="20px">
                    Learn more about datastructures
                </Heading>
                
            </Box>
        </Container>
    )
}

export default DatastructuresFrontpage;