import logo from "./logo.svg";
import "./App.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
import { ChakraProvider } from "@chakra-ui/react";

import { Theme } from "@radix-ui/themes";

function App() {
  return (
    <ChakraProvider>
      <Main></Main>
    </ChakraProvider>
  );
}

export default App;
