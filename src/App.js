import {
  ChakraProvider,
  theme,
  Flex,
  Box,
  Divider,
  Stack
} from '@chakra-ui/react'
import { Header } from './helpers/Header.js'
import DocumentList from './documents/index.js'
import DocumentList2 from './documents/index2.js'

export default function App() {
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
          This is the left most container...  ...later this will be filled with buttons.

        </Flex>
        <Stack w='100%'>
          <Box flex="2" overflow="auto">

            This is a container with a widget to add stuff into this container. This will be the uncategorized things.

            <DocumentList />

          </Box>
          <Divider color='black' />
          <Box bg="tomato" flex="1" overflow="auto">
            This is another container
            <DocumentList2 />
          </Box>
        </Stack>

      </Flex>
      This is the bottom, still in App.js

    </ChakraProvider>
  )
}