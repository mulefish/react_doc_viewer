import {
  ChakraProvider,
  theme,
  Flex,
  Heading,
  Divider
} from '@chakra-ui/react'

import DocumentList from './documents/index.js'

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex justify="center" align="center">
        <Heading>Hello world</Heading>
      </Flex>
      <Divider />
      <DocumentList />
    </ChakraProvider>
  )
}