import { useSelector, useDispatch } from 'react-redux'
import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaExpandAlt, FaCompressAlt } from 'react-icons/fa';
import { TYPE_GOTO_FULL_SCREEN, TYPE_LEAVE_FULL_SCREEN, STATUS_FULL_SCREEN, STATUS_NOT_FULL_SCREEN } from '../helpers/constants.js'

// TERMINALLY ugly UI
function openFullscreen() {
    const elem = document.getElementById("root");

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

function closeFullscreen() {
    const elem = document.getElementById("root");

    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}

export const ExpandContractButton = props => {
    // TODO! Make this work OR throw it entirely away

    const { data, status = STATUS_NOT_FULL_SCREEN, error } = useSelector(state => state.displayLayoutReducer)
    const dispatch = useDispatch()
    function toggleScreenRealEstateSize_fullScreen_or_normal() {

        if (status === STATUS_NOT_FULL_SCREEN) {
            dispatch({ type: TYPE_GOTO_FULL_SCREEN })
            alert("This is UGLY: TODO: figure out how to un-uglyify this idea. See ExpandContractButton.js")
            openFullscreen()
        } else {
            dispatch({ type: TYPE_LEAVE_FULL_SCREEN })
            closeFullscreen()
        }
    }

    const text = useColorModeValue('dark', 'light');
    const SwitchIcon = useColorModeValue(FaExpandAlt, FaCompressAlt);

    return (
        <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Switch to ${text} mode`}
            variant="ghost"
            color="current"
            marginLeft="2"
            onClick={toggleScreenRealEstateSize_fullScreen_or_normal}
            icon={<SwitchIcon />}
            {...props}
        />
    );
};