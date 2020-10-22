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
import Header from "../components/Header.js";
import BlockFeed from "../components/BlockFeed.js";
import GrabTen from "../components/GrabTen";


let ChainInfoObj = [];
export default function ChainInfo(props) {
  ChainInfoObj = [];
  for (let x in Object(props.currentInfo)) {
    // console.log(x, " : ", props.currentInfo[x]);
    ChainInfoObj.push(
      <Table 
      style={{...chainTableStyle}}
      animate headers={[x]} dataset={[[props.currentInfo[x]]]} />
    );
  }

  return <div style={{ width: "100%", marginRight:"45%" }}>{ChainInfoObj}</div>;
}


const chainTableStyle={
    height:"5%",
    // border:"5px solid red"
}