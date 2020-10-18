// import React, { useState, useEffect, useRef, Fragment, Redirect } from "react";
// import ReactDOM from "react-dom";
// import {
//   ThemeProvider,
//   createTheme,
//   Arwes,
//   Frame,
//   Heading,
//   Words,
//   SoundsProvider,
//   createSounds,
//   Button,
// } from "arwes";
// import Content from "arwes/lib/Content";
// import ErrorBoundary from "./ErrorBoundary";
// import Block from "./Block";
// import { useTimer } from "use-timer";
// import { Menu, Grid, Image } from "semantic-ui-react";
// import { opacify } from "polished";

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
const parser = require("eos-rc-parser");

// export default function ContractInfo(props){
// }

(async () => {
  try {
    let testAbi = await rpc.get_abi("whaleextrust");
    console.log(testAbi);
    for(let x of testAbi.abi.structs){
        console.log(x)
    }


    console.log(testAbi.abi.ricardian_clauses)
  } catch (err) {
    console.log("error : ", err);
  }
})();

// export default async

// async function getRC(props){
// parser.parse('bidname', {bid: '3 EOS', bidder: 'testaccount', newname: 'somename'}, ricardian, 'testaccount');
// const abi = await eos.contract(contractAccountName);
// const data = abi.fc.fromBuffer(action.name, action.data);
// const actionAbi = abi.fc.abi.actions.find(fcAction => fcAction.name === action.name);
// const parsedRicardianContract = parser.parse(action.name, data, actionAbi.ricardian_contract);
// }

// bluebetbulls
//gravydefitkn
// rentcpu2oow2
