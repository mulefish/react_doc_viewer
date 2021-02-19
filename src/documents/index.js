import { TYPE_LOAD_START, TYPE_LOAD_FINISH, TYPE_LOAD_ERROR, STATUS_LOADING, STATUS_ERROR, STATUS_FINISH } from '../constants/constants.js'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Box,
    Avatar,
    Heading,
    Button,
    Spinner,
    Stack,
    Text,
    Icon,
    Flex
} from '@chakra-ui/react'

export default function DocumentList() {
    const { data, status, error } = useSelector(state => state.documentReducer)
    const dispatch = useDispatch()
    function load() {
        dispatch({ type: TYPE_LOAD_START })

        fetch('https://reqres.in/api/users?page=1')
            .then(res => res.json())
            .then(data => dispatch({ type: TYPE_LOAD_FINISH, data: data }))
            .catch(error => dispatch({ type: TYPE_LOAD_ERROR, error: error }))
    }

    return (
        <>
            <Button onClick={load}>Load</Button>

            <Stack spacing={8}>
                {status === STATUS_LOADING ? <Spinner color="orange.500" /> : null}
                {status === STATUS_ERROR ? <h1>{error}</h1> : null}

                {status === STATUS_FINISH
                    ? data.data.map(x => (
                        <Item
                            key={x.id}
                            firstName={x.first_name}
                            lastName={x.last_name}
                            email={x.email}
                            avatar={x.avatar}
                        />
                    ))
                    : null}
            </Stack>
        </>
    )
}

function Item({ firstName, lastName, email, avatar }) {
    return (
        <Box p={5} shadow="md" borderWidth="1px">
            <Flex align="center">
                <Avatar name={firstName} src={avatar} />
                <Heading ml={2} fontSize="xl">
                    {firstName} {lastName}
                </Heading>
            </Flex>

            <Flex align="center" mt={2}>
                <Icon ml={2} name="email" size="20px" />
                <Text ml={2}>{email}</Text>
            </Flex>
        </Box>
    )
}