import React, { useState, useEffect, useRef, Fragment, Redirect } from "react";
import ReactDOM from "react-dom";
import {
  ThemeProvider,
  createTheme,
  Arwes,
  Frame,
  Heading,
  Words,
  Table,
  // SoundsProvider,
  // createSounds,
  Button,
} from "arwes";
import Content from "arwes/lib/Content";
import ErrorBoundary from "../components/ErrorBoundary";
import Block from "../components/Block";
import { useTimer } from "use-timer";
import { Menu, Grid, Image, Popup, Dropdown } from "semantic-ui-react";
import { opacify } from "polished";
import { JsonToTable } from "react-json-to-table";
import Header from "../components/Header.js";
import BlockFeed from "../components/BlockFeed.js";
import GrabTen from "../components/GrabTen";
import ChainInfo from "../components/ChainInfo";



export default function EndPointDropdown(props){

    return (
    
    <Dropdown
        style={{
          backgroundColor:"black",
          color:"white"
        }}
        placeholder='Select Endpoint'
        fluid
        selection
        options={[
          "https://api.eosn.io",
          "https://api.testnet.eos.io",
          "https://api.eosdetroit.io:443"
        ] }
        onChange={() =>{
          this.endPointURL=this.value
        }}
      />
    )
    }
    