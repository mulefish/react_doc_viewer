import {
    WrapItem,
    Box
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'


const cssToPreventTextSelection = {}
// const cssToPreventTextSelection = {
//     - webkit - touch - callout: none; /* iOS Safari */
// -webkit - user - select: none; /* Safari */
// -khtml - user - select: none; /* Konqueror HTML */
// -moz - user - select: none; /* Old versions of Firefox */
// -ms - user - select: none; /* Internet Explorer/Edge */
// user - select: none; /* Non-prefixed version, currently
//                                   supported by Chrome, Edge, Opera and Firefox */
// }


export default function Item({ category, confidence, id, finished }) {
    return (
        <WrapItem>
            <Box p={5} borderWidth="1px" style={cssToPreventTextSelection} >
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