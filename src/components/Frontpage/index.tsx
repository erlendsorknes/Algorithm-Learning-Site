import React from 'react'
import {Button, Container, Heading, Stack, Text,} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

const Frontpage = () => {
    return (
        <Container
        textAlign={'center'}
        backgroundImage="url('https://images.unsplash.com/photo-1580777361964-27e9cdd2f838?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2128&q=80')"
        backgroundSize={'cover'}
        height={'96vh'}
        mx={'0'}
        maxWidth="100%"
        color="#fff"
        >
            <Stack>
                textAlign={'center'}
                align={'center'}
                <Heading
                    mt={'20%'}
                    color={'white'}
                    fontFamily="Consolas"
                    fontWeight={700}
                    fontSize={{base: '4xl', sm: '2xl', md: '8xl'}}
                    lineHeight='110%'
                    mb={"1rem"}
                    ml={'50px'}
                >
                    Algorithms made easy{' '}
                </Heading>
            </Stack>
        </Container>
    )
}

export default Frontpage;
