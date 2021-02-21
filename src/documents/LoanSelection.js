import { TYPE_LOAD_START, TYPE_LOAD_FINISH, TYPE_LOAD_ERROR, STATUS_LOADING, STATUS_ERROR, STATUS_FINISH } from '../helpers/constants.js'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Button,
    Divider,
    Stack,
} from '@chakra-ui/react'


export default function LoanSelection() {
    const { data, status, error } = useSelector(state => state.documentReducer)
    //displayLayoutReducer
    const dispatch = useDispatch()
    function load(where_am_I_called_from) {
        dispatch({ type: TYPE_LOAD_START })

        fetch('http://localhost:4040/doc_hub_get')
            .then(res => res.json())
            .then(data => dispatch({ type: TYPE_LOAD_FINISH, data: data }))
            .catch(error => dispatch({ type: TYPE_LOAD_ERROR, error: error }))


    }

    return (
        <Stack>
            {/* <center>
                Loans
            </center>
            <Divider /> */}
            <Button onClick={load}>ABC Loan</Button>
            <Button onClick={load}>Blue Fish Brown Dirt</Button>
            <Button onClick={load}>Big Hat</Button>
            <Button onClick={load}>House for Martha</Button>
            <Button onClick={load}>Chunky Sea</Button>
        </Stack>
    )
}
