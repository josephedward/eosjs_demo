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
let endPointUrl = "https://api.testnet.eos.io";
const rpc = new JsonRpc(endPointUrl, { fetch });
// https://api.eosnewyork.io/v1/chain/get_info
let currentInfo;
let currentBlock = {};
let tenMostRecentBlocks = [];
let reqTimer;


let tenLatestBlocks = [];
async function grabTen(latestBlockNum) {
  
  tenLatestBlocks = [];
  try {
    for (let x = 10; x > 0; x--) {
      let blockIndex = latestBlockNum - x;
      let tempBlock = await rpc.get_block(blockIndex);
      tempBlock.staticFlag = true
      tenLatestBlocks.push(tempBlock);
    }
  } catch (err) {
    console.log(err);
  }

}

let recentBlocks = [];
function BlockList() {
  const { time, start, pause, reset, isRunning } = useTimer({
    initialTime: 50,
    timerType: "DECREMENTAL",
    onTimeUpdate: (time) => {
      // console.log("Time is updated", time);
      reqTimer = time;
    },
    interval: 1,
  });
  // reset();
  // start();

  const [count, setCount] = useState(0);
  useInterval(async () => {
    try {
      currentInfo = await rpc.get_info();
      // console.log("currentInfo.head_block_num : ", currentInfo.head_block_num);
      currentBlock = await rpc.get_block(currentInfo.head_block_num);
      // console.log("currentBlock : ", currentBlock);

      // for (let x = 10; x > 0; x--) {
      // let blockIndex = currentInfo.head_block_num - x;
      // let tempBlock = await rpc.get_block(blockIndex);
      recentBlocks.push(currentBlock);
      // }
      // console.log("blocks in memory: ", recentBlocks.length);
      if (recentBlocks.length >= 5) {
      
        recentBlocks.shift()
      }
    } catch (error) {
      console.log(chalk.red("ERROR FETCHING CHAIN : ") + chalk.bgRed(error));
    }
    setCount(count + 1);
  }, 500);

  return (
    <ErrorBoundary>
      <Arwes background="/images/blocks.gif">
        {/* pattern="/images/glow.png" */}
        <Frame
        
        >
          <Menu 
        
          stackable>
            <Menu.Item>
              <h1>EOS CHAIN NAVIGATOR</h1>
            </Menu.Item>
            <Menu.Item>
              <Button layer="success"
              
              onClick={()=>{grabTen(currentBlock.block_num)}}
              >Latest Ten Blocks</Button>
            </Menu.Item>
            <Menu.Item position="right">
              <h4>RPC-API-URL endpoint : {endPointUrl}</h4>
            </Menu.Item>
            <Menu.Item position="right">
              {/* {isRunning ? ( */}
              <Frame>
                <Heading>
                  Chain Height : {currentBlock.block_num}
                  {/* {Math.ceil((reqTimer - 1) / 2) */}
                  {/* } */}
                </Heading>
              </Frame>
              {/* ) : (
                ""
              )} */}
            </Menu.Item>
          </Menu>
        </Frame>
        <Grid style={{ ...menuStyle }}>
        <Grid.Column width={12} position="left" style={{ left: 0, width: "100%" }}>
            <Frame
              style={{
                width: "100%",
                height: "150vh",
                overflowY: "scroll",
                right: 0,
              }}
              
            >
              <div style={{ ...listStyle }}>
                {tenLatestBlocks
                  .slice(0)
                  .reverse()
                  .map((book) => (
                    <Block animate currentBlock={book} />
                  ))}
              </div>
            </Frame>

          </Grid.Column>

          <Grid.Column width={4} position="right" style={{ right: 0,
          //  width: "100%", 
           paddingRight:0 }}>
            <div
              style={{
                width: "100%",
                height: "150vh",
                overflowY:  "hidden",
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
          </Grid.Column>
        </Grid>  
      </Arwes>
    </ErrorBoundary>
  );
}

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
export default BlockList;

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

const timerStyle = {
  justifyContent: "center",
  textAlign: "center",
  margin: "0 auto",
};

const endPointStyle = {
  display: "flex",
  flexDirection: "row",
  // right: "0",
};

/*
timestamp 
producer 
confirmed
previous
transaction_mroot
action_mroot
schedule_version
new_producers
header_extensions
producer_signature
transactions
block_extensions
id
block_num
ref_block_prefix
*/

/* 
https://api.eosnewyork.io
https://api.eosio.cr:80
https://api.eosdetroit.io:443
https://eos.greymass.com:443
https://api.eosmetal.io:18890
http://api.hkeos.com:80
https://eosapi.blockmatrix.network:443
https://fn.eossweden.se:443
http://api.blockgenicbp.com:8888
http://mainnet.eoscalgary.io:80
https://node1.eosphere.io and https://node2.eosphere.io
https://eos.saltblock.io
http://eos-api.worbli.io:80
https://eos-api.worbli.io:443
http://mainnet.eoscalgary.io:80
https://user-api.eoseoul.io:443 and http://user-api.eoseoul.io:80 with CORS supported
https://node2.liquideos.com:8883 and http://node2.liquideos.com:8888
https://api.eosuk.io:443
http://api1.eosdublin.io:80
http://api.eosvibes.io:80
http://api.cypherglass.com:8888 and https://api.cypherglass.com:443
http://bp.cryptolions.io:8888
http://dc1.eosemerge.io and https://dc1.eosemerge.io
https://api.eosio.cr:443
https://api.eosn.io
https://eu1.eosdac.io:443
https://api.main.alohaeos.com:443
https://rpc.eosys.io
*/
