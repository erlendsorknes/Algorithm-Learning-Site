import React from 'react'
import {Container, Box, Flex, Image, Heading, Text} from '@chakra-ui/react';

const ScrolledDown = () => {
    return (
        <Box>
            <Container
            textAlign={'center'}
            mt="70px"
            fontSize="40px"
            color="#16161D"
            font="futura-pt"
            mb="50px"
            >
            <Heading
            color="white">
                Some of our work
            </Heading>
            </Container>
            <Flex direction="row" justifyContent="space-around" mt="30px">
                <Box mb="100px">
                    <Image src="https://i.ytimg.com/vi/UMlFFFXj9Bw/maxresdefault.jpg"
                    boxSize="400px"
                    />
                    <Heading as="h3" size="lg" mt="20px" ml="20px">
                        The rot cutting problem
                    </Heading>
                    <Text fontSize="lg">
                        Solving the classic "Rod cutting problem" with algorithms
                    </Text>

                </Box>
                <Box>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Bubblesort-edited-color.svg/512px-Bubblesort-edited-color.svg.png"
                    boxSize="400px"
                    />
                    <Heading as="h3" size="lg" mt="20px" ml="120px">
                        Bubble Sort
                    </Heading>
                </Box>
            </Flex>
        </Box>
    )
}

export default ScrolledDown;