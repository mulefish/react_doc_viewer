import { TYPE_LOAD_START, TYPE_LOAD_FINISH, TYPE_LOAD_ERROR, STATUS_LOADING, STATUS_ERROR, STATUS_FINISH } from '../helpers/constants.js'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Spinner,
    Wrap,
} from '@chakra-ui/react'
import Item from './Item.js'

export default function DocsInWorkingQueue() {
    const { data, status, error } = useSelector(state => state.documentReducer)
    return (
        <Wrap>
            {status === STATUS_LOADING ? <Spinner color="orange.500" speed="0.65s" size="xl" /> : null}
            {status === STATUS_ERROR ? <h1>{error}</h1> : null}
            {status === STATUS_FINISH
                ? data.data
                    .filter((x) => {
                        if (x.finished == true) {
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

// function Item({ category, confidence, id, finished }) {
//     return (
//         <WrapItem>
//             <Box p={5} borderWidth="1px" >
//                 <FontAwesomeIcon icon={faFile} size="lg" />
//                 <br />
//                 {category}
//                 <br />
//                 {confidence.toFixed(2)}
//                 <br />
//                 {id}
//                 {/* <br />
//                 {finished} */}
//             </Box>
//         </WrapItem>
//     )
// }