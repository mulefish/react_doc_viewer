import {
  ChakraProvider,
  theme,
  Flex,
  Heading,
  Divider
} from '@chakra-ui/react'
// import { ColorModeSwitchButton } from './helpers/ColorModeSwitchButton.js'
import { Header } from './helpers/Header.js'
import DocumentList from './documents/index.js'

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Divider />
      <DocumentList />
    </ChakraProvider>
  )
}