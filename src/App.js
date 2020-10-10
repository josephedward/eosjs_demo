import React, {useState} from 'react';
import BlockList from "./components/BlockList"
import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createTheme, Arwes, Project, Heading,
    SoundsProvider,
    createSounds,
} from 'arwes';
import Content from 'arwes/lib/Content';
import ErrorBoundary from './components/ErrorBoundary';

function App(){
    return(
<div>
<ErrorBoundary>
<ThemeProvider theme={createTheme()}>

<Arwes   background="/images/background.jpg" pattern="/images/glow.png">
<BlockList background="/images/background.jpg" pattern="/images/glow.png"/>
</Arwes>
</ThemeProvider>
</ErrorBoundary>
</div>
    )
}

export default App;

const mySounds = {
    shared: { volume: 1 },
    players: {
      information: { sound: { src: ["/sounds/information.mp3"] } },
      ask: { sound: { src: ["/sounds/ask.mp3"] } },
      warning: { sound: { src: ["/sounds/warning.mp3"] } },
      error: { sound: { src: ["/sounds/error.mp3"] } },
    },
  };