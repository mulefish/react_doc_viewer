import {
    Flex,
    Heading,
    IconButton,
    Select,
    Stack
} from '@chakra-ui/react'
import { ColorModeSwitchButton } from './ColorModeSwitchButton.js'
import About from './About.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand } from '@fortawesome/free-solid-svg-icons'
import { faCompress } from '@fortawesome/free-solid-svg-icons'
import { QuestionIcon } from '@chakra-ui/icons'

export function Header() {
    return (
        <Flex justify="center" align="center" h='10%'>

            <Heading>helpers/Header.js</Heading>

            &nbsp;
            &nbsp;

            <About />
            {/* <ColorModeSwitchButton mt={0} ml={3} p={0} /> */}
            <ColorModeSwitchButton />
            &nbsp;
            &nbsp;

            <FontAwesomeIcon icon={faExpand} size="lg"
                aria-label='Go to full screen'
            //  onClick={onOpen}
            //  onClose={onClose}
            />

&nbsp;
            &nbsp;

            <FontAwesomeIcon icon={faCompress} size="lg"
                aria-label='Leave full screen mode'
            //  onClick={onOpen}
            //  onClose={onClose}
            />

            &nbsp;
            &nbsp;
            Layout: &nbsp;
            <Select icon={QuestionIcon} w="180px">
                <option value="option1">3/0 | todo/done</option>/option>
                <option value="option1" selected="true">2/1 | todo/done</option>/option>
                <option value="option1">1/2 | todo/done</option>/option>
                <option value="option1">0/3 | todo/done</option>/option>
            </Select>

        </Flex>
    )
}







/*
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'

export default function Item({ category, confidence, id, finished }) {
    return (
        <WrapItem>
            <Box p={5} borderWidth="1px" >
                <FontAwesomeIcon icon={faFile} size="lg" />
                <br />
                {category}
                <br />
                {confidence.toFixed(2)}
                <br />
                {id}
                {/* <br />
                {finished}
            </Box>
        </WrapItem>
*/
