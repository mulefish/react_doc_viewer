import React from 'react';
import {
    Box,
    ModalContent,
    ModalBody,
    Modal,
    Button,
    useDisclosure,
    ModalOverlay,
    ModalHeader,
    ModalCloseButton,
    ModalFooter,
    IconButton,
} from '@chakra-ui/react';
import { QuestionIcon } from '@chakra-ui/icons'

function About() {
    const { isOpen, onClose, onOpen } = useDisclosure();
    return (
        <Box>
            {/* <Button onClick={onOpen}>About</Button> */}
            <IconButton
                icon={<QuestionIcon />}
                aria-label='Purpose TBD... About.js'
                onClick={onOpen}
                onClose={onClose}
            />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        This is an about. It is very informative.
                    </ModalBody>

                    <ModalFooter>
                        <Button mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
}

export default About;