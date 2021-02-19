import {
    Flex,
    Heading,
} from '@chakra-ui/react'
import { ColorModeSwitchButton } from './ColorModeSwitchButton.js'
import About from './About.js'

export function Header() {
    return (
        <Flex justify="center" align="center">
            <Heading>helpers/Header.js</Heading>
            <About />
            <ColorModeSwitchButton mt={0} ml={3} p={0} />
        </Flex>
    )
}