import {
    WrapItem,
    Box
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'

export default function Item({ category, confidence, id, finished }) {
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
                {/* <br />
                {finished} */}
            </Box>
        </WrapItem>
    )
}