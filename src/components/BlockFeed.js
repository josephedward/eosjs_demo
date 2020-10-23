import React, 
{ useState, useEffect, useRef, Fragment, Redirect } 
from "react";
import ReactDOM from "react-dom";
import {
  ThemeProvider,
  createTheme,
  Arwes,
  Frame,
  Heading,
  Words,
  Table,
  Button,
  Blockquote
} from "arwes";
import Content from "arwes/lib/Content";
import ErrorBoundary from "../components/ErrorBoundary";
import Block from "../components/Block";
import { useTimer } from "use-timer";
import { Menu, Grid, Image, Popup } from "semantic-ui-react";
import { opacify } from "polished";
import { JsonToTable } from "react-json-to-table";
import Header from "../components/Header.js"


export default function BlockFeed(props){
    
    return(
        <div
        style={{
          width: "100%",
          height: "100%",
          overflowY: "scroll",
          right: 0,
        }}
      >
             


        <div style={{ ...listStyle }}>
          {props.recentBlocks
            .slice(0)
            .reverse()
            .map((book) => (
              <Block class="intervalBlock" currentBlock={book} />
            ))}
        </div>
      </div>
    )
}


const listStyle = {
    // marginTop: "10%",
  };

  const blockStyle = {
    margin: "5%",
    // height: "100%",
    wordBreak: "break-all",
  
  };
  