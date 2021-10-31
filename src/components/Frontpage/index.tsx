import React from 'react'
import {Button, Container, Heading, Stack, Text,} from '@chakra-ui/react';

const Frontpage = () => {
    return (
        <Container>
            <Stack>
                textAlign={'center'}
                align={'center'}
                <Heading
                    fontWeight={600}
                    fontSize={{base: '3xl', sm: '4xl', md: '6xl'}}
                    lineHeight='110%'
                    mb={"1rem"}
                >
                    Algorithms made easy{' '}
                </Heading>
                <Text color={'gray.500'} maxW={'3xl'} lineHeight={'150%'}>
                    A learning site that teaches algorithms and datastructures.
                    Illustrative animations, pseudocode and detailed descriptions.
                </Text>
                <Stack pt="1rem" alignItems={["center", null]} spacing={10} direction={['column', 'row']}>
                    <Button
                        rounded={'full'}
                        px={6}
                        w={["10em", null]}
                        colorScheme={'red'}>
                        Algorithms
                    </Button>
                    <Button
                        rounded={'full'}
                        px={6}
                        w={["10em", null]}
                        colorScheme={'blue'}>
                        Datastructures
                    </Button>
                </Stack>
            </Stack>

        </Container>
    )
}

export default Frontpage;
