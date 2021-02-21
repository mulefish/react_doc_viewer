import { useSelector, useDispatch } from 'react-redux'

import {
    Flex,
    Heading,
    Radio,
    RadioGroup,
    Box
} from '@chakra-ui/react'
import { ColorModeSwitchButton } from './ColorModeSwitchButton.js'
import About from './AboutButton.js'
import { TYPE_GOTO_FULL_SCREEN, TYPE_LOAD_START, TYPE_LOAD_FINISH, TYPE_LOAD_ERROR, STATUS_LOADING, STATUS_ERROR, STATUS_FINISH } from '../helpers/constants.js'
import { ExpandContractButton } from './ExpandContractButton.js'
import { ViewportSizer } from './ViewportSizer.js'

export function Header() {


    const { data, status, error } = useSelector(state => state.displayLayoutReducer)
    //displayLayoutReducer
    const dispatch = useDispatch()
    // function doit() {
    //     dispatch({ type: TYPE_GOTO_FULL_SCREEN })


    // }
    //https://react-icons.github.io/react-icons/search?q=contract
    //    GrContract
    // GrExpand

    return (
        <Flex justify="center" align="center" h='10%'>
            {/* status: { status} |
             data: { data} |
            error: { error} | */}

            {/* <Button onClick={() => doit()}>doit</Button> */}
            {/* <Heading>helpers/Header.js</Heading> */}
            <About />
            <ColorModeSwitchButton />

            {/* Layout: &nbsp;
            <Select w="180px">
                <option value="2/1" >2/1 | todo/done</option>
                <option value="3/0">3/0 | todo/done</option>
                <option value="1/2">1/2 | todo/done</option>
                <option value="0/3">0/3 | todo/done</option>
            </Select> */}
            <ExpandContractButton />

            {/* 
            <RadioGroup
                defaultValue="2"
                aria-label={`Select viewport sizes`}
                pt={2}
            >
                <Radio value="1"></Radio>
                <Radio value="2"></Radio>
                <Radio value="3"></Radio>
                <Radio value="4"></Radio>
            </RadioGroup>

                skldasflk */}
            <ViewportSizer />

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
