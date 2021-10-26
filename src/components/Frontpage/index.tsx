import React from 'react'
import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
  } from '@chakra-ui/react';

const Frontpage = () => {
    return (
        <Container maxV={'5xl'}>
            <Stack>
                textAlign={'center'}
                align={'center'}
                <Heading
                 fontWeight ={600}
                 fontSize={{base: '3xl', sm: '4xl', md: '6xl'}}
                 lineHeight={'110%'}>
                    Algorithms made easy{' '}
                </Heading>
                <Text color={'gray.500'} maxW={'3xl'} lineHeight={'150%'}>
                    A visual learning site for algorithms and datastructures.
                    Illustrative animations, pseudocode and descriptive descriptions.
                </Text>
                <Stack spacing={10} direction={'row'}>
                    <Button
                    rounded={'full'}
                    px={6}
                    colorScheme={'blue'}>
                    Algorithms
                    </Button>
                    <Button
                    rounded={'full'}
                    px={6}
                    colorScheme={'red'}>
                    Datastructures
                    </Button>
                </Stack>
            </Stack>
            
        </Container>
    )}

export default Frontpage;
