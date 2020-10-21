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
import { Menu, Grid, Image, Popup } from "semantic-ui-react";
import { opacify } from "polished";
import { JsonToTable } from "react-json-to-table";

export default function Header(props) {
  return (
    <Frame>
      <Menu
        style={{
          backgroundColor: "black",
          color: "aqua",
          "-webkit-text-stroke": "1px white",
        }}
        stackable
      >
        <Menu.Item>
          <h1>EOS CHAIN NAVIGATOR</h1>
        </Menu.Item>

        <Menu.Item
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            textAlign:'center'
          }}
          align="center"
          position="center"
        >
          <Button
        style={{ ...centerStyle,
        //  margin: "2.5vh" 
         }}
        onClick={() => {
          props.grabTen(props.currentBlock.block_num);
        }}
      >
        Get Latest Ten Blocks
      </Button>

        </Menu.Item>

        <Menu.Item position="right">
        <h4
            style={{
              color: "aqua",
              "-webkit-text-stroke": "none",
            }}
          >
            RPC-API-URL endpoint : {props.endPointUrl}
          </h4>
        </Menu.Item>
      </Menu>
    </Frame>
  );
}

const centerStyle = {
  width: "100%",
  // height:"100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  textAlign: "center",
};
