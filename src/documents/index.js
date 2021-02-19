import { TYPE_LOAD_START, TYPE_LOAD_FINISH, TYPE_LOAD_ERROR, STATUS_LOADING, STATUS_ERROR, STATUS_FINISH } from '../helpers/constants.js'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Box,
    Button,
    Spinner,
    Wrap,
    WrapItem
} from '@chakra-ui/react'

export default function DocumentList() {
    const { data, status, error } = useSelector(state => state.documentReducer)
    const dispatch = useDispatch()
    function load() {
        dispatch({ type: TYPE_LOAD_START })

        fetch('http://localhost:4040/doc_hub_get')
            .then(res => res.json())
            .then(data => dispatch({ type: TYPE_LOAD_FINISH, data: data }))
            .catch(error => dispatch({ type: TYPE_LOAD_ERROR, error: error }))
    }

    return (
        <>
            <Button onClick={load}>Load</Button>

            <Wrap>
                {status === STATUS_LOADING ? <Spinner color="orange.500" /> : null}
                {status === STATUS_ERROR ? <h1>{error}</h1> : null}

                {status === STATUS_FINISH
                    ? data.data.map(x => (
                        <Item
                            key={x.id}
                            category={x.category}
                            confidence={x.confidence}
                            id={x.id}
                            avatar={x.avatar}
                        />
                    ))
                    : null}
                {/* </Flex> */}
            </Wrap>
        </>
    )
}

function Item({ category, confidence, id, avatar }) {
    return (
        <WrapItem>
            <Box p={5} borderWidth="1px" >
                {/* <Flex align="center"> */}

                {category}
                <br />
                {confidence.toFixed(3)}
                <br />
                {id}
            </Box>
        </WrapItem>
    )
}