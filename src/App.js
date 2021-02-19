import {
  ChakraProvider,
  theme,
  Flex,
  Box,
  Divider,
  Text,
  GridItem,
  Grid,
  Stack
} from '@chakra-ui/react'
// import { ColorModeSwitchButton } from './helpers/ColorModeSwitchButton.js'
import { Header } from './helpers/Header.js'
import DocumentList from './documents/index.js'

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
          <DocumentList />

        </Flex>
        <Stack w='100%'>
          <Box bg="tomato" flex="1" overflow="auto">

            This is a container

            <DocumentList />

          </Box>
          <Box bg="tomato" flex="1" overflow="auto">
            This is another container
            <DocumentList />

          </Box>
        </Stack>

      </Flex>
      This is the bottom, still in App.js

    </ChakraProvider>
  )
}