import React from "react"; //  useState, useEffect, useRef, Fragment, Redirect
//import ReactDOM from "react-dom";
import {
  // ThemeProvider,
  // createTheme,
  // Arwes,
  Frame,
  Heading,
  // Words,
  // Table,
  // SoundsProvider,
  // createSounds,
  Button,
} from "arwes";
// import Content from "arwes/lib/Content";
// import ErrorBoundary from "../components/ErrorBoundary";
// import Block from "../components/Block";
// import { useTimer } from "use-timer";
import {
  Menu,
  // MenuItem,
  //  Button
  // Grid, Image, Popup, Dropdown
} from "semantic-ui-react";
// import { opacify } from "polished";
// import { JsonToTable } from "react-json-to-table";
// let endpointURL = "";

export default function Header(props) {
  return (
    <Frame show={true} animate={true} level={3} layer="primary">
      <Menu
        style={{
          height: "25px",
          justifyContent: "center",
          margin: "0 auto",
          bottom: 0,
          marginBottom: 0,
          backgroundColor: "black",
          color: "aqua",
          "-webkit-text-stroke": "1px white",
        }}
        celled
        stackable
      >

        <Menu.Item>
          <h1>EOS CHAIN NAVIGATOR</h1>
        </Menu.Item>
      </Menu>
      <Menu
        style={{
          height: "10%",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "black",
          color: "aqua",
          "-webkit-text-stroke": "1px white",
          top: "0",
          marginTop: "0",
        }}
        stackable
      >
        <Menu.Item
          position="left"
          //   onMouseEnter={() => {
          //   document.documentElement.classList.toggle("dark-mode");
          // }}
          // onMouseOut={() => {
          //   document.documentElement.classList.toggle("dark-mode");
          // }}
        >
          <h4
            style={{
              color: "aqua",
              "-webkit-text-stroke": "none",
              paddingLeft: "25%",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            RPC-API-URL endpoint:
            <br />
            {props.endPointUrl}
          </h4>
        </Menu.Item>

        <Menu.Item style={{ marginLeft: "10%" }}>
          <Button
            style={{
              color: "aqua",
              // backgroundColor:"blue",
              border: "3px solid black",
              outline: "3px solid aqua",
              webkitTextStroke: "1px blue",
            }}
            onClick={() => {
              props.setMainFlag("getTenBlocks");
            }}
            href="/"
          >
            Block Explorer
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button
            style={{
              color: "aqua",
              // backgroundColor:"blue",
              border: "3px solid black",
              outline: "3px solid aqua",
              webkitTextStroke: "1px blue",
            }}
            onClick={() => {
              props.setMainFlag("searchAbi");
            }}
            href="/"
          >
            Search ABI
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

const blockStyle = {
  wordBreak: "break-all",
};
