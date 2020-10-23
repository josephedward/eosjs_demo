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

let endpointURL = "";

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
        
        }}
        stackable
      >
        <Menu.Item position="left">
          <h4
            style={{
              color: "aqua",
              "-webkit-text-stroke": "none",
              paddingRight: "1%",
            }}
          >
            RPC-API-URL endpoint:
            <br />
            {props.endPointUrl}
          </h4>
        </Menu.Item>

        <Menu.Item>
          <h1>EOS CHAIN NAVIGATOR</h1>
        </Menu.Item>
        <Menu.Item>
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
            justifyContent: "right",
          }}
          position="right"
        >
          <Frame
            style={{ ...blockStyle }}
            show={true}
            animate={true}
            level={3}
            corners={4}
            layer="primary"
          >
            <Heading>Chain Height :{props.currentBlock.block_num} </Heading>
          </Frame>
        </Menu.Item>
      </Menu>
    </Frame>
  );
}

const centerStyle = {
  // display: "flex",
  // flexDirection: "row",
};

const blockStyle = {
  // margin: "5%",
  // height: "100%",
  wordBreak: "break-all",
};
