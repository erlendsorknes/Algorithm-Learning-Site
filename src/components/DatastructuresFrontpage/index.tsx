import { Container, Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import BinaryTree from '../../algorithms/Dijkstra/heaps';
import Node from '../../components/DatastructuresFrontpage';



const DatastructuresFrontpage = () => {

    const binaryTree = new BinaryTree();
    binaryTree.insert(10).insert(20);
    console.log(binaryTree);


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
                <Node />
            </Box>
        </Container>
    )
}

export default DatastructuresFrontpage;