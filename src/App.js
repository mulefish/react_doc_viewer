import {
  ChakraProvider,
  theme,
  Flex,
  Box,
  Divider,
  Text,
  GridItem,
  Grid
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
        border="1px solid purple"
        height="50vh"
        overflow="hidden"
      >
        <Flex
          overflow="hidden"
          direction={["row", "column"]}
          bg="blue.200"
          width={["100%", "25%"]}
          height={["25%", "100%"]}
        >
          <DocumentList />

        </Flex>
        <Box bg="tomato" flex="1" overflow="auto">
          Meow i see a bird i stare at it i meow at it i do a wiggle come here
          birdy cat playing a fiddle in hey diddle diddle? peer out window,
          chatter at birds, lure them to mouth purr purr purr until owner pets
          why owner not pet me hiss scratch meow but rub face on owner wack the
          mini furry mouse. Annoy the old grumpy cat, start a fight and then
          retreat to wash when i lose cats secretly make all the worlds muffins
        </Box>
      </Flex>


    </ChakraProvider>
  )
}