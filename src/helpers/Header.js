import { useSelector, useDispatch } from 'react-redux'

import {
    Flex,
    Input,
    useColorModeValue,
    IconButton
} from '@chakra-ui/react'
import { ColorModeSwitchButton } from './ColorModeSwitchButton.js'
import AboutModal from './AboutModal.js'
import { NoteButton } from './NoteButton.js'
//import { TYPE_GOTO_FULL_SCREEN, TYPE_LOAD_START, TYPE_LOAD_FINISH, TYPE_LOAD_ERROR, STATUS_LOADING, STATUS_ERROR, STATUS_FINISH } from '../helpers/constants.js'
import { ExpandContractButton } from './ExpandContractButton.js'
import { ViewportSizer } from './ViewportSizer.js'
import { FaFilter, FaFish } from 'react-icons/fa'





export function Header() {


    // const { data, status, error } = useSelector(state => state.displayLayoutReducer)
    // const dispatch = useDispatch()
    const SwitchIcon = useColorModeValue(FaFilter, FaFish);

    return (
        <Flex justify="center" align="center" h='10%'>
            <AboutModal />
            <ColorModeSwitchButton />
            <ExpandContractButton />
            <ViewportSizer />
            <NoteButton />
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <Input placeholder="filter" w="40" />



            <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Do filtering`}
                variant="ghost"
                color="current"
                marginLeft="2"
                icon={<SwitchIcon />}
            />


        </Flex>
    )
}