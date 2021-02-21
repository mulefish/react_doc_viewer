import { useSelector, useDispatch } from 'react-redux'

import {
    Flex,
    Heading,
    IconButton,
    Select,
    Stack,
    Button
} from '@chakra-ui/react'
import { ColorModeSwitchButton } from './ColorModeSwitchButton.js'
import About from './About.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand } from '@fortawesome/free-solid-svg-icons'
import { faCompress } from '@fortawesome/free-solid-svg-icons'
import { QuestionIcon } from '@chakra-ui/icons'
import { TYPE_GOTO_FULL_SCREEN, TYPE_LOAD_START, TYPE_LOAD_FINISH, TYPE_LOAD_ERROR, STATUS_LOADING, STATUS_ERROR, STATUS_FINISH } from '../helpers/constants.js'

export function Header() {


    const { data, status, error } = useSelector(state => state.displayLayoutReducer)
    //displayLayoutReducer
    const dispatch = useDispatch()
    function doit() {
        dispatch({ type: TYPE_GOTO_FULL_SCREEN })


    }


    return (
        <Flex justify="center" align="center" h='10%'>
            status: { status} |
             data: { data} |
            error: { error} |

            <Button onClick={() => doit()}>doit</Button>

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
            {/* Yar - How to set 2/1 as the default selected value?!  */}
            <Select w="180px">
                <option value="2/1" >2/1 | todo/done</option>
                <option value="3/0">3/0 | todo/done</option>
                <option value="1/2">1/2 | todo/done</option>
                <option value="0/3">0/3 | todo/done</option>
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
