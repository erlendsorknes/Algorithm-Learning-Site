import {
  Container,
  Box,
  Heading,
  Text,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { Circle } from "./BinaryTree/Circle";
import BinaryTree from "./BinaryTree/BinaryTree";

const DatastructuresFrontpage = () => {
  const [value, setValue] = useState(0);
  const [print, setPrint] = useState(false);
  const [binaryTree, setBinaryTree] = useState(new BinaryTree<number>());
  const [test, setTest] = useState(false);

  const getData = (val: any) => {
    setValue(val.target.value);
  };

  const buttonClick = () => {
    binaryTree.insert(value);
    setTest((val) => !val);
  };

  const drawPositions = () => {
    let nodes = drawBinaryTree();
    return <Box>{nodes}</Box>;
  };

  const drawBinaryTree = () => {
    console.log(binaryTree.postOrder());
    return binaryTree.postOrder().map((value: number, i: number) => {
      return <Circle value={value} key={i} />;
    });
  };

  return (
    <Container w="full" h="100vh" padding="0" maxWidth="full" max>
      <Box bg="white" color="black" textAlign="center" w="full" h="100vh">
        <Heading mt="20px" mb="30px">
          Learn more about datastructures
        </Heading>
        <Box w="300px">
          <Text>Type the value</Text>
          <NumberInput min={1} max={100} value={value}>
            <NumberInputField onChange={getData} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          <Button mt="20px" onClick={() => buttonClick()}>
            Insert
          </Button>
          <Box>{drawPositions()}</Box>
        </Box>
      </Box>
    </Container>
  );
};

export default DatastructuresFrontpage;
