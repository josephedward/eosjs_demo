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
import { Menu, Grid, Image, Modal } from "semantic-ui-react";
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
const parser = require("eos-rc-parser");

// export default function ContractInfo(props){
// }

let abiRows = [];
let propVals = [];
export default async function AbiDisplay(props) {
  try {
    let response = await rpc.get_abi(props.account);
    let ABI = response.abi;

    console.log(ABI);
    // let propKeys=[]

    // let propRow=[]


    for (let x in ABI) {
      propVals[x] = [];
      if (ABI[x].length > 0) {
        for (let y in ABI[x]) {
          propVals[x].push(<div>{y}</div>);
        }
      }

      abiRows.push(
        <div>
          <strong>{x} : </strong>
          {propVals[x]}
        </div>
      );
    }

    // console.log(testAbi.abi.ricardian_clauses)
  } catch (err) {
    console.log("error : ", err);
  }


  return (
    <ErrorBoundary>
      <Modal trigger={<Button>Test</Button>}>
        <Frame>
          {abiRows?(<div>{abiRows}</div>):(<div>no abi </div>)}
        </Frame>
      </Modal>
    </ErrorBoundary>
  );
}

const rowStyle = {
  display: "flex",
  flexDirection: "row",
};

//whaleextrust
//pptqipaelyog
// bluebetbulls
//gravydefitkn
// rentcpu2oow2
