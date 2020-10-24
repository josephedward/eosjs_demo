import React, {
} from 'react';
import BlockList from "./pages/BlockList"
import './App.css';
import { ThemeProvider, createTheme, Arwes, 
} from 'arwes';
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'


function App(){
    return(
<div>
<ErrorBoundary>
<Router>
<Switch>
<ThemeProvider theme={createTheme()}>
<Arwes   background="/images/background.jpg" >
<Route exact path="/" component={BlockList} />
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