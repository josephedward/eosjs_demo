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
import Header from "../components/Header.js";
import BlockFeed from "../components/BlockFeed.js";
import GrabTen from "../components/GrabTen";
import ChainInfo from "../components/ChainInfo";

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
// https://api.eosnewyork.io/v1/chain/get_info


const rpc = new JsonRpc(endPointUrl, { fetch });
let currentInfo = {};
let currentBlock = {};
// let mainColFlag=""
let tenLatestBlocks = [];
async function grabTen(latestBlockNum) {
  tenLatestBlocks = [];
  try {
    for (let x = 10; x > 0; x--) {
      let blockIndex = latestBlockNum - x;
      let tempBlock = await rpc.get_block(blockIndex);
      tempBlock.staticFlag = true;
      tenLatestBlocks.push(tempBlock);
    }
  } catch (err) {
    console.log(err);
  }
}

let recentBlocks = [];
function BlockList() {
  const [count, setCount] = useState(0);
  useInterval(async () => {
    try {
      currentInfo = await rpc.get_info();
      currentBlock = await rpc.get_block(currentInfo.head_block_num);
      recentBlocks.push(currentBlock);
      if (recentBlocks.length >= 6) {
        recentBlocks.shift();
      }
    } catch (error) {
      console.log("ERROR FETCHING CHAIN : " + error);
    }
    setCount(count + 1);
  }, 500);

  return (
    <div style={{ height: "100vh"
    , overflowY: "hide" 
    }}>
      <ErrorBoundary>
        <Arwes background="/images/blocks.gif">
          <Header
            endPointUrl={endPointUrl}
            currentInfo={currentInfo}
            currentBlock={currentBlock}
            grabTen={() => {
              grabTen(currentBlock.block_num);
            }}
          />
          <Grid style={{ ...gridStyle }}>
            <Grid.Column style={{ ...menuStyle }} width={4} position="left">
              <Frame
                style={{
                  margin: "5%",
                  paddingLeft: 0,
                }}
              >
              <ErrorBoundary>
                <ChainInfo
                  style={{
                    marginRight: "50%",
                  }}
                  currentInfo={currentInfo}
                />
                </ErrorBoundary>
              </Frame>
            </Grid.Column>
            <Grid.Column
              width={8}
              position="center"
              style={{ width: "100%", ...menuStyle }}
            >
            <ErrorBoundary>
              <GrabTen
                style={{
                  height:"100%",
                  width: "100%",
                  overflowY: "scroll",
                  objectFit: "contain",
                }}
                grabTen={() => {
                  grabTen(currentBlock.block_num);
                }}
                currentBlock={currentBlock}
                tenLatestBlocks={tenLatestBlocks}
              />
              </ErrorBoundary>
            </Grid.Column>

            <Grid.Column
              width={4}
              position="right"
              style={{
                right: 0,
                paddingRight: 0,
                ...menuStyle,
              }}
            >
              <ErrorBoundary>
              <BlockFeed
                currentBlock={currentBlock}
                recentBlocks={recentBlocks}
              />
              </ErrorBoundary>
            </Grid.Column>
          </Grid>
        </Arwes>
      </ErrorBoundary>
    </div>
  );
}

// let ChainInfoObj = [];
// function ChainInfo(props) {
//   ChainInfoObj = [];
//   for (let x in Object(props.currentInfo)) {
//     // console.log(x, " : ", props.currentInfo[x]);
//     ChainInfoObj.push(
//       <Table animate headers={[x]} dataset={[[props.currentInfo[x]]]} />
//     );
//   }

//   return <div style={{ width: "100%" }}>{ChainInfoObj}</div>;
// }

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

const gridStyle = {
  width: "100%",
  height: "100vh",
  margin: "0",
};

const menuStyle = {
  width: "100%",
  height: "100vh",
  overflowY: "scroll",
};

const listStyle = {
  marginTop: "10%",
};

const headerStyle = {
  position: "fixed",
  justifyContent: "center",
  textAlign: "center",
  top: "0",
  zIndex: "10",
  margin: "0 auto",
};

const centerStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  textAlign: "center",
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
{
  /* <JsonToTable
  json={currentBlock}
/> */
}

{
  /* {currentInfo !=null? ( 
<Table
animate
headers={["timestamp", "producer", "confirmed", "previous"]}
dataset={[[currentInfo.timestamp, currentInfo.producer, currentInfo.confirmed, currentInfo.previous]]}
/>):("")} */
}
{
  /* 
timestamp	2020-10-20T02:25:29.500
producer	eoshuobipool
confirmed	0
previous	08d2c3dc37b9a8d605d4bfa7bdb9c1e3bbf8b48743077d5a73978ddf573d87be
transaction_mroot	d897772a4e795e0fa04ae25529032d58b9f5726ee3d68c21d12afe7ce0ed1f30
action_mroot	fca0518b7cbf9e2dd8464bc7ececf0442924b9cf786839579cd9cea001aa4ffb
schedule_version	1778
new_producers	
producer_signature	SIG_K1_KBAqfEy7aZTtNuzmRXzgHG3gtNy5fUBkbpjBCLkm4yFPtRfYFrqZU9JkYZh8cM9BVEtsvAqrZbpW1qcVMvNcwUyAfTmjrs
transactions
id	08d2c40ad58a10a08e924ec256cca06cb4bedd3cd1f87814d2c6cfa0cdbbfefa
block_num	148030474
ref_block_prefix

 */
}

/*
  
// const { time, start, pause, reset, isRunning } = useTimer({
  //   initialTime: 50,
  //   timerType: "DECREMENTAL",
  //   onTimeUpdate: (time) => {
  //     // console.log("Time is updated", time);
  //     reqTimer = time;
  //   },
  //   interval: 1,
  // });

*/
