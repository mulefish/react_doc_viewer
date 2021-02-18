import React from "react";
import {
  CSSReset,
  Box,
  Heading,
  Button,
  Text,
  Input,
  IconButton
} from "@chakra-ui/react";
import { connect } from "react-redux";
import { updateUserNames, deleteUser } from "./actions";

class App extends React.Component {
  state = {
    input: ""
  };

  onChange = event => {
    this.setState({ input: event.target.value });
  };

  onClick = () => {
    this.props.updateUserNames(this.state.input);
    this.setState({ input: "" });
  };

  onDelete = event => {
    console.log(event.target);
    if (event.target.value) {
      this.props.deleteUser(event.target.value);
    } else {
      this.props.deleteUser(event.target.parentNode.value);
    }
  };

  render() {
    return (
      <Box padding={4}>
        <Heading marginY={6}>Welcome</Heading>
        <Button
          focusBorderColor="purple"
          variant="outline"
          variantColor="purple"
          onClick={this.onClick}
        >
          Gimmie Yo Name
          </Button>
        <Input
          focusBorderColor="yellow"
          marginY={2}
          onChange={this.onChange}
          value={this.state.input}
        />
        <Text>Guest List:</Text>
        <Box>
          {this.props.names.map((name, i) => (
            <Text marginY={2} key={i}>
              <IconButton
                variantColor="red"
                aria-label="Delete"
                size="sm"
                icon="delete"
                marginRight={2}
                onClick={this.onDelete}
                value={name}
              />
              {name}
            </Text>
          ))}
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  names: state.names
});

export default connect(
  mapStateToProps,
  { updateUserNames, deleteUser }
)(App);




// import React from 'react';
// import {
//   ChakraProvider,
//   Box,
//   Text,
//   Link,
//   VStack,
//   Code,
//   Grid,
//   theme,
// } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

// function App() {
//   return (
//     <ChakraProvider theme={theme}>
//       <Box textAlign="center" fontSize="xl">
//         <Grid minH="100vh" p={3}>
//           <ColorModeSwitcher justifySelf="flex-end" />
//           <VStack spacing={8}>
//             <Link
//               color="teal.500"
//               href="https://chakra-ui.com"
//               fontSize="2xl"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Learn Chakra
//             </Link>
//           </VStack>
//         </Grid>
//       </Box>
//     </ChakraProvider>
//   );
// }


/*
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
*/
// export default App;
