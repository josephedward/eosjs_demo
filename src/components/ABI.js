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
import { Menu, Grid, Image, Modal, Container } from "semantic-ui-react";
import { opacify } from "polished";
import JSONPretty from "react-json-pretty";
import { JsonToTable } from "react-json-to-table";
import JSONTree from "react-json-tree";

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
var Inspector = require("react-json-inspector");

// let AbiResponse;
let AbiObj;
let AbiObjString;

export default function AbiDisplay(props) {
  
let accountName= props.accountName

  return (
    <ErrorBoundary>
      <Modal
        trigger={
          <Button
          layer='success'
            onClick={
              (props) => {
              // console.log(this.props)
              (async (props) => {
                console.log(props)
               let AbiResponse = await rpc.get_abi(accountName);
                // let AbiResponse = await rpc.get_abi("whaleextrust");
                // console.log(AbiResponse);
                AbiObj = AbiResponse.abi;
                // console.log("AbiObj : ", AbiObj);
                AbiObjString = JSON.stringify(AbiObj);
                // console.log(AbiObjString);
              }
              )();
            }
            }
          >
            ABI Details - {accountName}
          </Button>
        }
      >
        <Frame>
          <Modal.Content>
            <JSONTree data={AbiObj} 
              theme={theme}
              invertTheme={false}
            />
          </Modal.Content>
        </Frame>
      </Modal>
    </ErrorBoundary>
  );
}

const theme = {
  scheme: 'monokai',
  author: 'wimer hazenberg (http://www.monokai.nl)',
  base00: '#272822',
  base01: '#383830',
  base02: '#49483e',
  base03: '#75715e',
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#f92672',
  base09: '#fd971f',
  base0A: '#f4bf75',
  base0B: '#a6e22e',
  base0C: '#a1efe4',
  base0D: '#66d9ef',
  base0E: '#ae81ff',
  base0F: '#cc6633'
};

// <div>
//   <JSONTree data={data} theme={theme} invertTheme={false} />
// </div>

const jsonStyle = {
  lineHeight: "20px",
  height: "20px",
  fontSize: "20px",
};

// propVals[x] = [];
// if (ABI[x].length > 0) {
//   for (let y in ABI[x]) {
//     console.log(ABI[x][y]);
//     propVals[x].push(<p key={hashCode(ABI[x][y])}>{ABI[x][y]}</p>);
//   }
// }

// abiRows.push(
//   <div>
//     {x}
//   </div>
// );
// export default function ContractInfo(props){
// }

// let abiRows = [];
// let propVals = [];
// let ABI;

// // const [data, setData] = useState({ abiRows: [] });

// // async function BuildAbi(accountName)
// async function BuildAbi(props)
// {
//   try {
//     let response = await rpc.get_abi(props.accountName);
//     ABI = response.abi;
//     console.log(ABI);
//     // abiRows=[]

//     // console.log("ABI.ricardian_clauses : ", ABI.ricardian_clauses);
//     // } catch (err) {
//     //   console.log("error : ", err);
//     // }
//   } catch (err) {
//     console.log(err);
//     // window.location.reload()
//   }

// // abiRows = ABI.map((key,val)=>(
// //   <div>{key}</div>
// // ))

//   return <div>{abiRows.forEach((aRow)=>
//   (<p>{aRow}</p>)
//   )}</div>

// }

// function AbiDisplay(props) {
//   console.log(props);

//   return (
//     // "test"
//     // <p>test</p>
//     <ErrorBoundary>
//       <Modal
//         trigger={
//           <Button
//             // onClick={async (props) => {
//             //   await BuildAbi("whaleextrust");
//             //   console.log("abiRows.length : ", abiRows.length);
//             // }}
//           >
//             Test
//           </Button>
//         }
//       >
//         <Frame>
//           <Modal.Content>
//             {/* {abiRows.length > 0 ? ( */}
//               {/* <div> */}

//                 <BuildAbi
//                 accountName={"whaleextrust"}
//                  />
//           </Modal.Content>
//         </Frame>
//       </Modal>
//     </ErrorBoundary>
//   );
// }

// //   console.log(ABI);
// //   // let propKeys=[]

// //   // let propRow=[]

// //   for (let x in ABI) {
// //     propVals[x] = [];
// //     if (ABI[x].length > 0) {
// //       for (let y in ABI[x]) {
// //         propVals[x].push(<p>{y}</p>);
// //       }
// //     }

// //     abiRows.push(
// //       <p>
// //         <strong>{x} : </strong>
// //         {propVals[x]}
// //       </p>
// //     );
// //   }

// //   // console.log(testAbi.abi.ricardian_clauses)
// // } catch (err) {
// //   console.log("error : ", err);
// // }

// // async function getAbi(){

// // }

// // const [data, setData] = useState({ hits: [] });

// //   useEffect(async () => {
// //     const result = await axios(
// //       'https://hn.algolia.com/api/v1/search?query=redux',
// //     );

// //     setData(result.data);
// //   });

// export default AbiDisplay;

// const rowStyle = {
//   display: "flex",
//   flexDirection: "row",
// };

// //whaleextrust
// //pptqipaelyog
// // bluebetbulls
// //gravydefitkn
// // rentcpu2oow2

//     // try {
//     //   // console.log("abiRows : ", abiRows);
//     //   return await (<div>{abiRows}</div>);
//     // } catch (err) {
//     //   console.log(err);
//     // }

//     // function hashCode(aString) {
//     //   var hash = 0;
//     //   if (aString.length == 0) {
//     //     return hash;
//     //   }
//     //   for (var i = 0; i < aString.length; i++) {
//     //     var char = aString.charCodeAt(i);
//     //     hash = (hash << 5) - hash + char;
//     //     hash = hash & hash; // Convert to 32bit integer
//     //   }
//     //   return hash;
//     // }

//                   {/* </div> */}
//             {/* ) : (
//               <p>no abi </p>
//             )} */}
