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
          display: "flex",
          flexDirection: "row",
          backgroundColor: "black",
          color: "aqua",
          "-webkit-text-stroke": "1px white",
          width:"100%"
        }}
        stackable
      >
        <Menu.Item
        position="left"
        >
          <h1>EOS CHAIN NAVIGATOR</h1>
        </Menu.Item>

        <Menu.Item
          style={{
            justifyContent: "center",
            textAlign: "center",
            // width: "100%",
          }}
          align="center"
          position="center"
        >
          <Button
            style={{
              ...centerStyle,
            }}
            onClick={() => {
              props.grabTen(props.currentBlock.block_num);
            }}
          >
            Get Latest Ten Blocks
          </Button>
        </Menu.Item>

        <Menu.Item
        style={{
          justifyContent:"right"
        }}  
        position="right"
        >
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
