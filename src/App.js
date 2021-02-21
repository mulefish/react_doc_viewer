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

const cssForVerticleOnlyScrolling = {
  overflowY: 'scroll',
  overflowX: 'hidden'
}

export default function App() {
  // https://codesandbox.io/s/32858p0ln6?file=/src/index.tsx 

  return (
    <ChakraProvider theme={theme}>
      <Header />

      <Flex direction={["column", "row"]} border="1px solid black" height="80vh" overflow="hidden">
        {/* LEFT MOST */}
        <Flex overflow="hidden" borderRight="1px solid black" direction={["row", "column"]} width={["100%", "25%"]} height={["10%", "100%"]}        >
          <LoanSelection />
        </Flex>



        <Stack w='100%'>
          <Box flex="2" borderBottom="1px solid black" style={cssForVerticleOnlyScrolling}>
            <DocsNotInWorkingQueue />
          </Box>
          <Box bg="green.500" flex="1" style={cssForVerticleOnlyScrolling}>
            <DocsInWorkingQueue />
          </Box>
        </Stack>

      </Flex>

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

He took his vorpal sword in hand;
      Long time the manxome foe he sought—
So rested he by the Tumtum tree
      And stood awhile in thought.
      <br />

And, as in uffish thought he stood,
      The Jabberwock, with eyes of flame,
Came whiffling through the tulgey wood,
      And burbled as it came!
      <br />

One, two! One, two! And through and through
      The vorpal blade went snicker-snack!
He left it dead, and with its head
      He went galumphing back.
      <br />

“And hast thou slain the Jabberwock?
      Come to my arms, my beamish boy!
O frabjous day! Callooh! Callay!”
      He chortled in his joy.
      <br />

’Twas brillig, and the slithy toves
      Did gyre and gimble in the wabe:
All mimsy were the borogoves,
      And the mome raths outgrabe.

    </ChakraProvider>
  )
}