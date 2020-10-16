import React, { useState, useEffect, useRef, Fragment, Redirect } from "react";
import ReactDOM from "react-dom";
import {
  ThemeProvider,
  createTheme,
  Arwes,
  Frame,
  Heading,
  Words,
  SoundsProvider,
  createSounds,
  Button,
} from "arwes";
import Content from "arwes/lib/Content";
import ErrorBoundary from "./ErrorBoundary";
import Block from "./Block";
import { useTimer } from "use-timer";
import { Menu, Grid, Image } from "semantic-ui-react";
import { opacify } from "polished";

const chalk = require("chalk");
const { Api, JsonRpc, RpcError } = require("eosjs");
const { JsSignatureProvider } = require("eosjs/dist/eosjs-jssig"); // development only
const fetch = require("node-fetch"); // node only; not needed in browsers
const { TextEncoder, TextDecoder } = require("util"); // node only; native TextEncoder/Decoder
const defaultPrivateKey = "5JtUScZK2XEp3g9gh7F8bwtPTRAkASmNrrftmx4AxDKD5K4zDnr"; // bob
const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);
let endPointUrl = "https://api.eosdetroit.io:443";
// "https://api.eosio.cr:80"
// "https://api.testnet.eos.io";
const rpc = new JsonRpc(endPointUrl, { fetch });
// https://api.eosnewyork.io/v1/chain/get_info

let currentInfo;
let currentBlock = {};
let recentBlocks = [];
const [count, setCount] = useState(0);
useInterval(async () => {
  try {
    currentInfo = await rpc.get_info();
    currentBlock = await rpc.get_block(currentInfo.head_block_num);
    recentBlocks.push(currentBlock);
    if (recentBlocks.length >= 5) {
      recentBlocks.shift();
    }
  } catch (error) {
    console.log(chalk.red("ERROR FETCHING CHAIN : ") + chalk.bgRed(error));
  }
  setCount(count + 1);
}, 500);

function useInterval(callback, delay) {
  const savedCallback = useRef();
  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default class BlockFeed extends React.Component {

render(){
    return (
    <div
      style={{
        width: "100%",
        height: "150vh",
        overflowY: "hidden",
        // direction: 'rtl',
        right: 0,
      }}
      // position="right"
    >
      <div style={{ ...listStyle }}>
        {recentBlocks
          .slice(0)
          .reverse()
          .map((book) => (
            <Block currentBlock={book} />
          ))}
      </div>
    </div>
  );}
}

const menuStyle = {
  width: "100%",
  // opacity:"1",
  // color:"white"
  // color:"aqua",
  // background:"black"
};

const listStyle = {
  marginTop: "10%",
};

const headerStyle = {
  position: "fixed",
  justifyContent: "center",
  // background: "darkblue",
  textAlign: "center",
  top: "0",
  // width: "100%",
  zIndex: "10",
  margin: "0 auto",
  // border: "3px solid aqua",
};

const centerStyle = {
  width: "100%",
  // height:"100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  textAlign: "center",
};

// const { time, start, pause, reset, isRunning } = useTimer({
//   initialTime: 50,
//   timerType: "DECREMENTAL",
//   onTimeUpdate: (time) => {
//     // console.log("Time is updated", time);
//     reqTimer = time;
//   },
//   interval: 1,
// });
