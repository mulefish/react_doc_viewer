import { useSelector, useDispatch } from 'react-redux'

import {
  ChakraProvider,
  theme,
  Flex,
  Box,
  Stack
} from '@chakra-ui/react'
import { Header } from './helpers/Header.js'
import DocsNotInWorkingQueue from './documents/docs_not_in_working_queue.js'
import DocsInWorkingQueue from './documents/docs_in_working_queue.js'
import LoanSelection from './documents/LoanSelection.js'
import { THREE_ZERO, TWO_ONE, ONE_TWO, ZERO_THREE } from './helpers/constants.js'
//import { TYPE_SET_VIEWPORT_RATIOS, THREE_ZERO, TWO_ONE, ONE_TWO, ZERO_THREE } from './helpers/constants.js'


const cssForVerticleOnlyScrolling = {
  overflowY: 'scroll',
  overflowX: 'hidden'
}

export default function App() {


  const { status } = useSelector(state => state.viewportReducer)
  let upperRatio = 2
  let bottomRatio = 1
  if (status === THREE_ZERO) {
    upperRatio = 3
    bottomRatio = 0
  } else if (status === TWO_ONE) {
    upperRatio = 2
    bottomRatio = 1
  } else if (status === ONE_TWO) {
    upperRatio = 1
    bottomRatio = 2
  } else if (status === ZERO_THREE) {
    upperRatio = 0
    bottomRatio = 3
  }



  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Flex direction={["column", "row"]} border="1px solid black" height="80vh" overflow="hidden">
        {/* LEFT MOST */}
        <Flex overflow="hidden" borderRight="1px solid black" direction={["row", "column"]} width={["100%", "25%"]} height={["10%", "100%"]}        >
          <LoanSelection />
        </Flex>

        <Stack w='100%'>
          <Box flex={upperRatio} borderBottom="1px solid black" style={cssForVerticleOnlyScrolling}>
            <DocsNotInWorkingQueue />
          </Box>
          <Box bg="green.500" flex={bottomRatio} style={cssForVerticleOnlyScrolling}>
            <DocsInWorkingQueue />
          </Box>
        </Stack>

      </Flex>
      <Box pl="20">
        ’Twas brillig, and the slithy toves
        Did gyre and gimble in the wabe:
        All mimsy were the borogoves,
        And the mome raths outgrabe.
      <br />
“Beware the Jabberwock, my son!
      The jaws that bite, the claws that catch!
Beware the Jubjub bird, and shun
      The frumious Bandersnatch!”
      <br />
      </Box>
    </ChakraProvider>
  )
}