
import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaExpandAlt, FaCompressAlt } from 'react-icons/fa';

export const MyGlyph = props => {
    const { toggleColorMode } = useColorMode();
    const text = useColorModeValue('dark', 'light');
    const SwitchIcon = useColorModeValue(FaExpandAlt, FaCompressAlt);

    //    https://react-icons.github.io/react-icons/icons?name=fa

    return (
        <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Switch to ${text} mode`}
            variant="ghost"
            color="current"
            marginLeft="2"
            onClick={toggleColorMode}
            icon={<SwitchIcon />}
            {...props}
        />
    );
};