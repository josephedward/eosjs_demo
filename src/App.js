import React, {useState} from 'react';
import Counter from "./components/BlockList"
import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createTheme, Arwes, Project, Heading } from 'arwes';
import Content from 'arwes/lib/Content';

function App(){
    return(
<div>
<ThemeProvider theme={createTheme()}>
<Arwes   background="/images/background.jpg" pattern="/images/glow.png">
{/* <Project> */}
<Counter background="/images/background.jpg" pattern="/images/glow.png"/>
{/* </Project> */}
</Arwes>
</ThemeProvider>
</div>
    )
}

export default App;