import React, { useState, useEffect, useRef, 
  // Fragment, Redirect 
} from "react";
// import ReactDOM from "react-dom";
import {
  // ThemeProvider,
  // createTheme,
  Arwes,
  Frame,
  // Heading,
  // Words,
  // Table,
  // SoundsProvider,
  // createSounds,
  // Button,
} from "arwes";
// import Content from "arwes/lib/Content";
import ErrorBoundary from "../components/ErrorBoundary";
// import Block from "../components/Block";
// import { useTimer } from "use-timer";
import {
  // Menu,
  Grid,
  //  Image, Popup, Dropdown
} from "semantic-ui-react";
// import { opacify } from "polished";
// import { JsonToTable } from "react-json-to-table";
import Header from "../components/Header.js";
import BlockFeed from "../components/BlockFeed.js";
import GrabTen from "../components/GrabTen";
import ChainInfo from "../components/ChainInfo";
import SearchABI from "../components/SearchABI";

// const chalk = require("chalk");
const { 
  // Api,
   JsonRpc,
    // RpcError
   } = require("eosjs");
// const { JsSignatureProvider } = require("eosjs/dist/eosjs-jssig"); // development only
const fetch = require("node-fetch"); // node only; not needed in browsers
// const { TextEncoder, TextDecoder } = require("util"); // node only; native TextEncoder/Decoder
// const defaultPrivateKey = "5JtUScZK2XEp3g9gh7F8bwtPTRAkASmNrrftmx4AxDKD5K4zDnr"; // bob
// const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);
let endPointUrl = 
// "https://api.eosdetroit.io:443";
// "https://api.eosio.cr:80"
// "https://api.testnet.eos.io";
"https://eos.dfuse.eosnation.io/"
// "https://api.eosnewyork.io/v1/chain/get_info"

const rpc = new JsonRpc(endPointUrl, { fetch });
let currentInfo = {};
let currentBlock = {};
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
    <div style={{ height: "100vh", overflowY: "hide" }}>
      <ErrorBoundary>
        <Arwes background="/images/blocks.gif">
          <Header
            getComponent={getComponent}
            endPointUrl={endPointUrl}
            currentInfo={currentInfo}
            currentBlock={currentBlock}
            setMainFlag={setMainFlag}
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
              <ErrorBoundary>{getComponent(mainColFlag)}</ErrorBoundary>
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

function setMainFlag(flag) {
  mainColFlag = flag;
  return mainColFlag;
}
let mainColFlag;

function getComponent() {
  let component;
  switch (mainColFlag) {
    case "getTenBlocks":
      component = (
        <GrabTen
          style={{
            height: "100%",
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
      );
      break;
    case "searchAbi":
      component = (
        <SearchABI
          style={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
          }}
        />
      );
      break;
    default:
      component = (
        <GrabTen
          style={{
            height: "100%",
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
      );
      break;
  }
  return component;
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


/**
 * block_cpu_limit: 200000
block_net_limit: 1048576
chain_id: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"
fork_db_head_block_id: "08e279257c018d4b08fa3fc0d8b5e68c6fd9b86830062805130a04e7f8b84a68"
fork_db_head_block_num: 149059877
head_block_id: "08e279257c018d4b08fa3fc0d8b5e68c6fd9b86830062805130a04e7f8b84a68"
head_block_num: 149059877
head_block_producer: "blockpooleos"
head_block_time: "2020-10-26T01:29:45.000"
last_irreversible_block_id: "08e277da437b57ec4334289c7689ca9a65193e6a66750a1076f306ae378feb04"
last_irreversible_block_num: 149059546
server_full_version_string: "v2.0.6-2281ba064ffa5de0efbe492a2fbf8e4249eda508-dirty"
server_version: "c173d52d"
server_version_string: "v2.0.6"
virtual_block_cpu_limit: 200000
virtual_block_net_limit: 1048576000
 */






/**
action_mroot: "ca7425909b4e64fb77d73d5885582664de19505f70e91d007bb11f62eb114e71"
block_num: 149059877
confirmed: 0
id: "08e279257c018d4b08fa3fc0d8b5e68c6fd9b86830062805130a04e7f8b84a68"
new_producers: null
previous: "08e27924882cf6601aa119b47a68614f4864d3a7e9e97e90d7b0efd92ae76347"
producer: "blockpooleos"
producer_signature: "SIG_K1_K96MvqGwR2DPYAcGFQGEUrv9jVoUVmBbHsFpzKw68zWuXNQad2BbQRMf9dNGf6LQpqcKNeQh2TkFR4hEjBDXDTfAWTF5qx"
ref_block_prefix: 3225418248
schedule_version: 1782
timestamp: "2020-10-26T01:29:45.000"
transaction_mroot: "4177b8971d93dc55c557eac144cf2ff8901211a1612ebb950141d5380433698c"
transactions:
 */