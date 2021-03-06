import { TYPE_LOAD_START, TYPE_LOAD_FINISH, TYPE_LOAD_ERROR, STATUS_LOADING, STATUS_ERROR, STATUS_FINISH } from '../helpers/constants.js'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Spinner,
    Wrap,
} from '@chakra-ui/react'
import Item from './Item.js'

export default function DocsNotInWorkingQueue() {
    const { data, status, error } = useSelector(state => state.documentReducer)
    return (
        <Wrap>
            {/* {status === STATUS_LOADING ? <Spinner color="orange.500" /> : null} */}
            {status === STATUS_LOADING ? <Spinner color="orange.500" speed="0.65s" size="xl" /> : null}
            {status === STATUS_ERROR ? <h1>{error}</h1> : null}
            {status === STATUS_FINISH
                ? data.data
                    .filter((x) => {
                        if (x.finished == false) {
                            return x
                        }
                    })
                    .map(x => (
                        <Item
                            key={x.id}
                            category={x.category}
                            confidence={x.confidence}
                            id={x.id}
                            finished={x.finished + ""}
                        />
                    ))
                : null}
        </Wrap>
    )
}