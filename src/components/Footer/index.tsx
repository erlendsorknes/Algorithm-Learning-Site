import { Flex, Link, useColorModeValue } from '@chakra-ui/react'

const Footer = () => (
  <Flex
    left="0"
    bottom="0"
    width="100%"
    alignItems="flex-start"
    justifyContent="space-around"
    bg={useColorModeValue('gray.100', 'gray.900')}
  >
    <Flex direction="column" p="4" rounded="6">
      <h2>
        <b>Contributors:</b>
      </h2>
      <p>Erlend Sorknes</p>
      <p>Mattis Czternasty Hembre</p>
      <p>Henrik Johannes Bjørnstad Skog</p>
    </Flex>
    <Flex direction="column" p="4" rounded="6">
      <h2>
        <b>Contact us:</b>
      </h2>
      <Link color="teal.500" href="https://github.com/Erlend0703/Algorithm-Learning-Site">
        Our GitHub repository
      </Link>
    </Flex>
  </Flex>
)

export default Footer
