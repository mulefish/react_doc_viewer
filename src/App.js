import {
  ChakraProvider,
  theme,
  Flex,
  Box,
  Divider,
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
      <Divider />

      <Flex
        direction={["column", "row"]}
        border="1px solid black"
        height="80vh"
        overflow="hidden"
      >
        <Flex
          overflow="hidden"
          direction={["row", "column"]}
          width={["100%", "25%"]}
          height={["10%", "100%"]}
        >

          <LoanSelection />

        </Flex>
        <Stack w='100%'>
          <Box flex="2" style={cssForVerticleOnlyScrolling}>
            <DocsNotInWorkingQueue />
          </Box>
          <Divider color='black' />
          {/* <Box bg="tomato" flex="1" overflow="auto"> */}
          <Box bg="green.500" flex="1" style={cssForVerticleOnlyScrolling}>
            <DocsInWorkingQueue />
          </Box>
        </Stack>

      </Flex>
      This is the bottom, still in App.js

    </ChakraProvider>
  )
}