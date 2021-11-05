import React from 'react'
import {Box, Heading, Image, Text} from '@chakra-ui/react';
import { Link } from 'react-router-dom';



interface Props{
    title: string,
    img: string,
    text: string,
    link: string,
}

const Item = ({title,img,text, link}:Props) => {
    return (
        <Box mb="100px"
        width="380px"
        >
        <Link to={link}>
        <Image src={img}
        borderRadius="full"
        boxSize="380px"
        />
        </Link>
        <Heading as="h3" size="lg" mt="20px" ml="100px">
            {title}
        </Heading>
        <Text fontSize="md" ml="80px" mt="10px">
            {text}
        </Text>
    </Box>
    )
}

export default Item
