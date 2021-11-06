import { Container, Box, Heading, Flex } from '@chakra-ui/react';
import React from 'react';
import { Circle } from './Circle';



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
                <Heading
                mt="20px"
                mb="30px">
                    Learn more about datastructures
                </Heading>
                <Flex
                alignItems="center"
                justifyContent="space-around"
                >
                    <Circle />
                </Flex>
           
                </Box>
        </Container>
    )
}

export default DatastructuresFrontpage;