import { useSelector, useDispatch } from 'react-redux'
import React from 'react';
import { useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaPen, FaPencilAlt } from 'react-icons/fa';

export const NoteButton = props => {

    const text = useColorModeValue('dark', 'light');
    const SwitchIcon = useColorModeValue(FaPen, FaPencilAlt);

    return (
        <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Switch to ${text} mode`}
            variant="ghost"
            color="current"
            marginLeft="2"
            icon={<SwitchIcon />}
        />
    );
};