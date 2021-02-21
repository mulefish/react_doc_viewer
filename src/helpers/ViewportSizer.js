import { useSelector, useDispatch } from 'react-redux'
import React from 'react';
import {
    useColorModeValue,
    Radio,
    RadioGroup
} from '@chakra-ui/react';

import { FaExpandAlt, FaCompressAlt } from 'react-icons/fa';
import { TYPE_GOTO_FULL_SCREEN, TYPE_LEAVE_FULL_SCREEN, STATUS_FULL_SCREEN, STATUS_NOT_FULL_SCREEN } from '../helpers/constants.js'

export const ViewportSizer = () => {
    // TODO! Make this work OR throw it entirely away

    const { data, status = STATUS_NOT_FULL_SCREEN, error } = useSelector(state => state.displayLayoutReducer)
    const dispatch = useDispatch()
    function toggleScreenRealEstateSize_fullScreen_or_normal() {

        if (status === STATUS_NOT_FULL_SCREEN) {
            dispatch({ type: TYPE_GOTO_FULL_SCREEN })
            alert("HELLO KITTY")
        } else {
            dispatch({ type: TYPE_LEAVE_FULL_SCREEN })
        }
    }

    const text = useColorModeValue('dark', 'light');
    const SwitchIcon = useColorModeValue(FaExpandAlt, FaCompressAlt);

    return (
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

    );
};