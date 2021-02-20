import { TYPE_LOAD_START, TYPE_LOAD_FINISH, TYPE_LOAD_ERROR, STATUS_LOADING, STATUS_ERROR, STATUS_FINISH } from '../helpers/constants.js'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Box,
    Button,
    Spinner,
    Wrap,
    WrapItem,
    IconButton,
    Heading
} from '@chakra-ui/react'
import FontAwesome from 'react-fontawesome'
//import { QuestionIcon } from '@chakra-ui/icons'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { FaBuilding } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'


export default function DocsInWorkingQueue() {
    const { data, status, error } = useSelector(state => state.documentReducer)
    const dispatch = useDispatch()
    function load(where_am_I_called_from) {
        dispatch({ type: TYPE_LOAD_START })

        fetch('http://localhost:4040/doc_hub_get')
            .then(res => res.json())
            .then(data => dispatch({ type: TYPE_LOAD_FINISH, data: data }))
            .catch(error => dispatch({ type: TYPE_LOAD_ERROR, error: error }))
    }

    return (
        <>
            {/* <Button onClick={load}>Load</Button> */}

            <Wrap>
                {status === STATUS_LOADING ? <Spinner color="orange.500" /> : null}
                {status === STATUS_ERROR ? <h1>ack! {error}</h1> : null}

                {status === STATUS_FINISH
                    ? data.data.map(x => (
                        <Item
                            key={x.id}
                            category={x.category}
                            confidence={x.confidence}
                            id={x.id}
                        />
                    ))
                    : null}
            </Wrap>
        </>
    )
}

function Item({ category, confidence, id }) {
    return (
        <WrapItem>
            <Box p={5} borderWidth="1px" >
                <FontAwesomeIcon icon={faFile} size="lg" />
                <br />
                {category}
                <br />
                {confidence.toFixed(2)}
                <br />
                {id}
            </Box>
        </WrapItem>
    )
}