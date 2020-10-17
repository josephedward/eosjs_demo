import React, { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";
import { Frame, Project, Table, Header } from "arwes";
import {
  Label,
  Menu,
  // Table
} from "semantic-ui-react";
import { ThemeProvider, createTheme, Row, Col, Arwes, Blockquote } from "arwes";
import { Container, Modal } from "semantic-ui-react";
import {
  Button,
  // Header,
  Segment,
  TransitionablePortal,
} from "semantic-ui-react";
import { Redirect } from "react-router";
import ToObject from "es-abstract/5/ToObject";

export default function TransactionList(props) {
  console.log(typeof props.transactionList);

  return (
    <Modal
      style={{ ...transactionStyle }}
      trigger={
        <Button
          style={{
            ...buttonStyle,
            "-webkit-text-stroke": "1px white",
            color: "aqua",
            backgroundColor: "black",
            outline: "3px solid aqua",
            border: "3px solid white",
          }}
        >
          Show Transactions
        </Button>
      }
      // header='Reminder!'
      // content='Call Benjamin regarding the reports.'
      // actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
    >
      <Modal.Content>
        {/* <Transaction
      blockId={props.blockId}
      transaction={props.transactionList[0]}
      /> */}
        <TListObj
          blockId={props.blockId}
          transactionList={props.transactionList}
        />
      </Modal.Content>
    </Modal>
  );
}

function TListObj(props) {
  console.log(props);
  let tList = [];
  for (let x = 0; x < props.transactionList.length; x++) {
    tList.push(
      <Frame style={{ ...rowStyle }}>
        <Header>
          <strong>Transaction ID : </strong>
          {props.transactionList[x].trx.id}
        </Header>

        {/* <Table
          animate
          headers={["cpu_usage_us : ", "net_usage_words :", "status :"]}
          dataset={[
            [
              props.transactionList[x].cpu_usage_us,
              props.transactionList[x].net_usage_words,
              props.transactionList[x].status,
            ],
          ]}
        /> */}

        <p style={{ ...itemStyle }}>
          <div>
            <strong>signatures: </strong>
            <SignatureObj
              signatures={props.transactionList[x].trx.signatures}
            />
            {/* {props.transactionList[x].trx.signatures} */}
          </div>
          <div>
            <strong>cpu_usage_us: </strong>
            {props.transactionList[x].cpu_usage_us}
          </div>
          <div>
            <strong>net_usage_words: </strong>
            {props.transactionList[x].net_usage_words}
          </div>
          <div>
            <strong>status: </strong> {props.transactionList[x].status}
          </div>

          <div>
            <strong>compression: </strong>
            {props.transactionList[x].trx.compression}
          </div>
          <div>
            <strong>context_free_data: </strong>
            {props.transactionList[x].context_free_data}
          </div>
          <div>
            <strong>packed_context_free_data: </strong>{" "}
            {props.transactionList[x].trx.packed_context_free_data}
          </div>
          <div>
            <strong>packed_trx: </strong>
            {props.transactionList[x].trx.packed_trx}
          </div>
          <div>
            <strong>expiration: </strong>
            {props.transactionList[x].trx.transaction.expiration}
          </div>
          <div>
            <strong>delay_sec: </strong>
            {props.transactionList[x].trx.transaction.delay_sec}
          </div>
          <div>
            <strong>ref_block_num: </strong>
            {props.transactionList[x].trx.transaction.ref_block_num}
          </div>
          <div>
            <strong>ref_block_prefix: </strong>
            {props.transactionList[x].trx.transaction.ref_block_prefix}
          </div>
          <div>
            <strong>max_cpu_usage_ms: </strong>
            {props.transactionList[x].trx.transaction.max_cpu_usage_ms}
          </div>
          <div>
            <strong>max_net_usage_words: </strong>
            {props.transactionList[x].trx.transaction.max_net_usage_words}
          </div>
          <div>
            <strong>Actions: </strong>
            <ActionObj
              actions={props.transactionList[x].trx.transaction.actions}
            />
            {/* {props.transactionList[x].trx.transaction.max_net_usage_words} */}
          </div>
        </p>

        {/* <Table
          animate
          headers={[
            "compression : ",
            "context_free_data",
            "packed_context_free_data :",
            "packed_trx :",
          ]}
          dataset={[
            [
              props.transactionList[x].trx.compression,
              props.transactionList[x].context_free_data,
              props.transactionList[x].trx.packed_context_free_data,
              props.transactionList[x].trx.packed_trx,
            ],
          ]}
        /> */}

        {/* <SignatureObj signatures={props.transactionListx[x].trx.signatures} /> */}
        {/* <p><strong>cpu_usage_us : </strong>{props.transactionList[x].cpu_usage_us}</p>
        <p><strong>net_usage_words : </strong>{props.transactionList[x].net_usage_words}</p>
        <p><strong>status : </strong>{props.transactionList[x].status}</p> */}
      </Frame>
      // <Transaction
      //   blockId={props.blockId}
      //   transaction={props.transactionList[x]}
      // ></Transaction>
    );
  }
  return <Arwes style={{ ...frameStyle }}>{tList}</Arwes>;
}

function SignatureObj(props) {
  let sigList = [];
  for (let x = 0; x < props.signatures.length; x++) {
    sigList.push(<div>{props.signatures[x]}</div>);
  }

  return <div>{sigList}</div>;
}

function ActionObj(props) {
  let actList = [];
  for (let x = 0; x < props.actions.length; x++) {
    actList.push(
      <div style={{ ...actionStyle }}>
        <div>
          <strong>account : </strong>
          {props.actions[x].account}
        </div>
        <div>
          <strong>name : </strong>
          {props.actions[x].name}
        </div>
        <div>
          <strong>hex_data : </strong>
          {props.actions[x].hex_data}
        </div>

        <div>
          <strong>account : </strong>
          {props.actions[x].account}
        </div>
        <div>
          <strong>name : </strong>
          {props.actions[x].name}
        </div>
        <div>
          <strong>hex_data : </strong>
          {props.actions[x].hex_data}
        </div>

        <div>
          <strong>authorization: </strong>
          <AuthorizationObj authorization={props.actions[x].authorization} />
        </div>

        <div>
          <strong>data payload: </strong>

          <Blockquote layer="success">
            <DataObj data={props.actions[x].data} />
            {/* {props.actions[x].data} */}
          </Blockquote>
        </div>
      </div>
    );
  }

  return <div>{actList}</div>;
}

function AuthorizationObj(props) {
  let authList = [];
  for (let x = 0; x < props.authorization.length; x++) {
    authList.push(
      <ul style={{ ...leftStyle }}>
        <li>
          <strong>actor : </strong>
          {props.authorization[x].actor}
        </li>
        <li>
          <strong>permission : </strong>
          {props.authorization[x].permission}
        </li>
      </ul>
    );
  }

  return <div>{authList}</div>;
}

function DataObj(props) {
  let dataList = [];

  if(!props.data['0']){
  for (let x in props.data) {
    dataList.push(
      <div style={{ ...dataStyle }}>
        <strong>{x} : </strong>
        <div>{props.data[x]} : </div>
      </div>
    );
  }}
  else{
    dataList.push("no data")
  }
  return <div>{dataList}</div>;
}

const leftStyle = {
  marginLeft: "2.5%",
};

const actionStyle = {
  marginLeft: "2.5%",
  // textOverflow: "ellipsis",
  textOverflow: "wrap",
  whiteSpace: "wrap",
  // "white-space": "nowrap",
  marginTop: "1%",
  marginBottom: "1%",
  border: "1px solid #26dafd",
};

const dataStyle = {
  display: "flex",
  flexDirection: "row",
  overflow: "hidden",
};

const itemStyle = {
  // display: "flex",
  // flexDirection: "row",
  overflowX: "scroll",

  // textOverflow: "ellipsis",
  // "white-space": "nowrap",
  //   lineHeight: '20px',
  //   padding:"5%",
  // height: "20px",
};

const transactionStyle = {
  height: "80%",
  width: "80%",
};

const buttonStyle = {
  position: "absolute",
  zIndex: 50,
};

const rowStyle = {
  marginTop: "5%",
  marginBottom: "5%",
  // display: "flex",
  // flexDirection:"row",
  // height:"50%",
  // margin:"1%"
};

const frameStyle = {
  // height: "50px",
  // margin:"1%",
  height: "100%",
  width: "100%",
  // padding:"1%"
};

const projectStyle = {
  height: "100%",
  //   margin: "2.5%",
  //   overflow: "scroll",
};

const accordionStyle = {
  color: "white",
};

// const fakeTransaction = {
//   cpu_usage_us: 212,
//   net_usage_words: 13,
//   status: "executed",
//   trx: {
//     compression: "none",
//     context_free_data: [],
//     id: "b9caafd0a02836510d3c54ae8e636a9f7921e5b966fb2020c9442e8dc20d5824",
//     packed_context_free_data: "",
//     packed_trx:
//       "0d6e815f6bab3ca76bb8000000000180b535d2ccb9a78a000000000075e8ad0180b535d2ccb9a78a00000000a8ed323208335c00000000000000",

//     signatures: [
//       "SIG_K1_K3VNDhTSeXeUv7TMoE86SANSG8S4ktY29ARFyawmtijtsJjSaPiiwf8JWS7aw8QunjtbPzDwpgATQegY1ofc9THm9JNJsj",
//       "SIG_K1_K3VNDhTSeXeUv7TMoE86SANSG8S4ktY29ARFyawmtijtsJjSaPiiwf8JWS7aw8QunjtbPzDwpgATQegY1ofc9THm9JNJsj",
//     ],
//     transaction: {
//       actions: [
//         {
//           account: "lenvnnamaqus",
//           authorization: [
//             {
//               actor: "lenvnnamaqus",
//               permission: "active",
//             },
//           ],
//           data: { number: 23603 },
//           hex_data: "335c000000000000",
//           name: "probe",
//         },
//       ],
//       context_free_actions: [],
//       delay_sec: 0,
//       expiration: "2020-10-10T08:17:17",
//       max_cpu_usage_ms: 0,
//       max_net_usage_words: 0,
//       ref_block_num: 43883,
//       ref_block_prefix: 3094062908,
//     },
//   },
// };
