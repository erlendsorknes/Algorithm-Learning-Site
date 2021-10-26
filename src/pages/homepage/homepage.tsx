import React from 'react';
import '../../App.css';
import {Input, Stack} from "@chakra-ui/react";
import Navbar from '../../components/Navbar';
import Frontpage from '../../components/Frontpage';
import {
  Flex,
  Container,
  Heading,
  Text,
  Button,
  Icon,
  IconProps,
} from '@chakra-ui/react';

function Homepage() {
  return (
      <div>
        <Navbar />
        <Frontpage />
      </div>
  );
}


export default Homepage;
