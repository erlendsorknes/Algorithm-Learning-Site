import React, { useRef } from 'react';
import { Box, Heading, Image, ScaleFade, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useInViewport } from 'react-in-viewport';

interface Props {
  title: string;
  img: string;
  text: string;
  link: string;
}

const Item = ({ title, img, text, link }: Props) => {
  const ref = useRef(null);
  const { enterCount } = useInViewport(
    ref,
    { rootMargin: '-200px' },
    { disconnectOnLeave: false },
    {}
  );

  return (
    <ScaleFade
      initialScale={0.8}
      in={enterCount > 0}
      whileHover={{ scale: 1.1 }}
    >
      <Box mb="100px" width="380px" ref={ref}>
        <Link to={link}>
          <Image src={img} borderRadius="full" boxSize="380px" />
        </Link>
        <Heading as="h3" size="lg" mt="20px" ml="100px">
          {title}
        </Heading>
        <Text fontSize="md" ml="80px" mt="10px">
          {text}
        </Text>
      </Box>
    </ScaleFade>
  );
};

export default Item;
