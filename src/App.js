import React, {useState} from 'react';
import BlockList from "./pages/BlockList"
// import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createTheme, Arwes, Project, Heading,
    // SoundsProvider,
    // createSounds,
} from 'arwes';
import Content from 'arwes/lib/Content';
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Transaction from './components/Transaction'
import 'semantic-ui-css/semantic.min.css'
import AbiDisplay from "./components/ABI"

function App(){
    return(
<div>
<ErrorBoundary>
<Router>
<Switch>
<ThemeProvider theme={createTheme()}>
<Arwes   background="/images/background.jpg" >
<Route exact path="/" component={BlockList} />
{/* <Route exact path="/test" component={AbiDisplay} /> */}
</Arwes>
</ThemeProvider>
</Switch>
</Router>

</ErrorBoundary>
</div>
    )
}

export default App;

// const mySounds = {
//     shared: { volume: 1 },
//     players: {
//       information: { sound: { src: ["/sounds/information.mp3"] } },
//       ask: { sound: { src: ["/sounds/ask.mp3"] } },
//       warning: { sound: { src: ["/sounds/warning.mp3"] } },
//       error: { sound: { src: ["/sounds/error.mp3"] } },
//     },
//   };