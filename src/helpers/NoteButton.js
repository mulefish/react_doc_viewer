import { useSelector, useDispatch } from 'react-redux'
import React from 'react';
import {
    useColorModeValue,
    IconButton,
    Box,
    ModalOverlay,
    ModalHeader,
    ModalCloseButton,
    ModalFooter,
    ModalContent,
    ModalBody,
    Modal,
    useDisclosure,
    Button,
    Textarea
} from '@chakra-ui/react';
import { FaPen, FaPencilAlt } from 'react-icons/fa';

export const NoteButton = props => {

    function save_and_close() {
        onClose()
    }
    let value = "Purpose: I image that lots of documents will be read and commpared...\n...I bet having an easy note/scratch pad would be useful."

    function relocalstorage_and_open() {
        value += "\n!!This will read and write to Localstorage"

        onOpen()
    }


    const { isOpen, onClose, onOpen } = useDisclosure();
    const SwitchIcon = useColorModeValue(FaPen, FaPencilAlt);

    return (
        <Box>

            <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to note-taking modal`}
                variant="ghost"
                color="current"
                marginLeft="2"
                onClick={relocalstorage_and_open}
                onClose={onClose}
                icon={<SwitchIcon />}
            />

            <Modal isOpen={isOpen} onClose={onClose} size='6xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Notes:</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Textarea
                            w="80%"
                            value={value}
                            size="lg"
                            rows='20'
                        />
                    </ModalBody>

                    <ModalFooter>
                        <Button mr={3} onClick={save_and_close}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </Box>
    );
};


