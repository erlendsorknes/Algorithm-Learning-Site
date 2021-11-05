import React from 'react'
import {Container, Box, Flex, Image, Heading, Text} from '@chakra-ui/react';

const ScrolledDown = () => {
    return (
        <Box>
            <Container
            textAlign={'center'}
            mt="70px"
            fontSize="40px"
            font="futura-pt"
            mb="50px"
            >
            <Heading
            fontFamily="Consolas">
                Algorithms
            </Heading>
            </Container>
            <Flex direction="row" justifyContent="space-around" mt="30px">
                <Box mb="100px">
                    <Image src="https://images.unsplash.com/photo-1520697517317-6767553cc51a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
                    boxSize="300px"
                    />
                    <Heading as="h3" size="lg" mt="20px" ml="5px" fontFamily="Consolas">
                        The rot cutting problem
                    </Heading>
                    <Text fontSize="lg">
                        Solving the classic "Rod cutting problem" with algorithms
                    </Text>
                </Box>
                <Box>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Bubblesort-edited-color.svg/512px-Bubblesort-edited-color.svg.png"
                    boxSize="300px"
                    />
                    <Heading as="h3" size="lg" mt="20px" ml="60px" fontFamily="Consolas">
                        Bubble Sort
                    </Heading>
                    <Text fontSize="lg" ml="40px">
                        Learn how bubble sort works

                    </Text>
                </Box>
            </Flex>
        </Box>
    )
}

export default ScrolledDown;