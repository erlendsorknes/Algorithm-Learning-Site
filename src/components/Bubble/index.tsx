import {ReactNode} from 'react';
import {
    Stack,
    Flex

} from '@chakra-ui/react';


const list:Array<number> = [4,6,2,1,10,13,9,2,3,6]

export default function Bubble() {

    return (
        <Flex width="100%" alignItems="flex-end" position="fixed" top="20%">
            {list.map((num) => (
                <ListElement num={num}></ListElement>
            ))}
        </Flex>
    );

}

interface ListElementProps {
    num: number;
}

const ListElement = ({ num }:ListElementProps) => (
    <Stack height={num* 30 + 300}  width={window.innerWidth / list.length} borderRadius="xl"    opacity="0.4"bgGradient="linear(to-t, purple.900, purple.100)" _hover={{
     bgGradient: "linear(to-t, purple.900, white)",
  }}>
        {num}
    </Stack>
)
