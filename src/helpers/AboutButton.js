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
    useColorModeValue
} from '@chakra-ui/react';
import { FaRegQuestionCircle, FaQuestionCircle } from 'react-icons/fa';

function About() {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const SwitchIcon = useColorModeValue(FaRegQuestionCircle, FaQuestionCircle);

    return (
        <Box>
            <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Launch a modal`}
                variant="ghost"
                color="current"
                marginLeft="2"
                onClick={onOpen}
                onClose={onClose}
                icon={<SwitchIcon />}
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