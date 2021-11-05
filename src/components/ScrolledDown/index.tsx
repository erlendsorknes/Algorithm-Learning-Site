import React from 'react'
import {Container, Box, Flex, Image, Heading, Text, Button, ScaleFade} from '@chakra-ui/react';
import Item from './Item';
import { Link } from 'react-router-dom';

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
            fontFamily=""
            fontSize="40px"
            >
               Our favorite algorithms
            </Heading>
            </Container>
            <Flex direction="row" justifyContent="space-around" mt="30px">
                <Item 
                link="RodCutting"
                img="https://images.unsplash.com/photo-1520697517317-6767553cc51a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
                title="Rod Cutting"
                text="Learn how to solve the famous rod cutting problem with the help of algorithms!" />

                <Item 
                link="MergeSort"
                img="https://www.biteinteractive.com/wp-content/uploads/2021/06/git-merges.png"
                text="Learn how to sort arrays by splitting recurrsivly and merging them"
                title="Merge Sort" />

                <Item
                link="BubbleSort"
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Bubblesort-edited-color.svg/512px-Bubblesort-edited-color.svg.png"
                text="Learn how bubble sort works"
                title="Bubble sort" />
            </Flex>
            <Link to="algorithms">
                <Button
                colorScheme="teal"
                variant="solid"
                ml="45%"
                mb="30px"
                height="50px"
                width="150px"
                mt="-20px"
                >
                    Learn more!
                </Button>
            </Link>
        </Box>
    )
}

export default ScrolledDown;