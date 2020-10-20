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
        <Menu.Item style={{ ...centerStyle, width: "45%" }}>
          <Popup
            position="left"
            style={{
              backgroundColor: "darkblue",
              border: "3px solid aqua",
            }}
            trigger={
              <h4
                style={{
                  color: "aqua",
                  "-webkit-text-stroke": "none",
                }}
              >
                RPC-API-URL endpoint : {props.endPointUrl}
              </h4>
            }
          >
            <Popup.Content>
              <Frame style={{ backgroundColor: "lightgrey" }}>
                <JsonToTable json={props.currentInfo} />
              </Frame>
            </Popup.Content>
          </Popup>
        </Menu.Item>
        <Menu.Item position="right">
          <Frame>
            <Heading>Chain Height : {props.currentBlock.block_num}</Heading>
          </Frame>
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
