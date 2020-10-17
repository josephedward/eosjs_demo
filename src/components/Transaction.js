import React, { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";
import { Frame, Project, Table, Header } from "arwes";
import {
  Label,
  Menu,
  // Table
} from "semantic-ui-react";
import { ThemeProvider, createTheme, Row, Col, Arwes } from "arwes";
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
    sigList.push(
      <div>{props.signatures[x]}</div>
    );
  }

  return(
    <div>{sigList}</div>
  )


}

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

const lineStyle = {
  width: "100%",
  flexDirection: "column",
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

// class Transaction extends Component {
//   constructor(props) {
//     console.log("props.transaction : ", props.transaction);
//     super(props);
//     this.state = {
//       blockId: props.blockId,
//       transaction: props.transaction,
//       // open: false,
//       // activeIndex: 0,
//     };
//   }

//   render() {
//     // const { open } = this.state.open;

//     // console.log("this.state.transaction : ", this.state.transaction);
//     // if (this.state.transaction.trx.signatures == 1) {
//     //   console.log();
//     // }

//     try {
//       let tHeader = "Transaction ID: " + this.state.transaction.trx.id;
//       return (
//         <div
//         // style={{ all: "unset" }}
//         >
//           <Arwes>
//             <Project style={{ ...projectStyle }} header={tHeader}>
//               <Row style={{ ...rowStyle }}>
//                 <Col m={2}>cpu_usage_us : </Col>
//                 <Col m={9}>{this.state.transaction.cpu_usage_us}</Col>
//               </Row>
//               <Row style={{ ...rowStyle }}>
//                 <Col m={2}>net_usage_words : </Col>
//                 <Col m={9}>{this.state.transaction.net_usage_words}</Col>
//               </Row>
//               <Row style={{ ...rowStyle }}>
//                 <Col m={2}>status : </Col>
//                 <Col m={9}>{this.state.transaction.status}</Col>
//               </Row>
//               <Row style={{ ...rowStyle }}></Row>

//               <Row style={{ ...rowStyle }}>
//                 <Col m={12}>TRX: </Col>
//               </Row>
//               <Row style={{ ...rowStyle }}>
//                 <Col m={2}></Col>
//                 <Col m={3}>compression : </Col>
//                 <Col m={3}>{this.state.transaction.trx.compression}</Col>
//               </Row>
//               <Row style={{ ...rowStyle }}>
//                 <Col m={2}></Col>
//                 <Col m={3}>context_free_data : </Col>
//                 <Col m={3}>
//                   {this.state.transaction.trx.context_free_data.forEach(
//                     (cfd) => (
//                       <div style={{ ...rowStyle }}>{cfd}</div>
//                     )
//                   )}
//                 </Col>
//               </Row>
//               <Row style={{ ...rowStyle }}>
//                 <Col m={2}></Col>
//                 <Col m={3}>packed_context_free_data : </Col>
//                 <Col m={3}>
//                   {this.state.transaction.trx.packed_context_free_data}
//                 </Col>
//               </Row>
//               <Row style={{ ...rowStyle }}>
//                 <Col m={2}></Col>
//                 <Col m={3}>packed_trx : </Col>
//                 <Col m={3}>{this.state.transaction.trx.packed_trx}</Col>
//               </Row>
//               <Row style={{ ...rowStyle }}>
//                 <Col m={2}></Col>
//                 <Col m={3}>signatures : </Col>
//               </Row>
//               <Row>
//                 <Col m={2}></Col>
//                 <Col m={10}>
//                   {/* <Frame style={{ ...frameStyle }}>
//                     {this.state.transaction.trx.signatures.map((sig) => (
//                       <getSigs sig={sig} />
//                     ))}
//                   </Frame> */}
//                 </Col>
//               </Row>
//               <Row style={{ ...rowStyle }}>
//                 <Col m={12}>Transaction Detail : </Col>
//               </Row>
//               <Row style={{ ...rowStyle }}>
//                 <Col m={2}></Col>
//                 <Col m={3}>context_free_actions : </Col>
//                 <Col m={3}>
//                   {this.state.transaction.trx.transaction.context_free_actions}
//                 </Col>
//               </Row>
//               <Row style={{ ...rowStyle }}>
//                 <Col m={2}></Col>
//                 <Col m={3}>delay_sec : </Col>
//                 <Col m={3}>
//                   {this.state.transaction.trx.transaction.delay_sec}
//                 </Col>
//               </Row>
//               <Row style={{ ...rowStyle }}>
//                 <Col m={2}></Col>
//                 <Col m={3}>expiration : </Col>
//                 <Col m={3}>
//                   {this.state.transaction.trx.transaction.expiration}
//                 </Col>
//               </Row>
//               <Row style={{ ...rowStyle }}>
//                 <Col m={2}></Col>
//                 <Col m={3}>max_cpu_usage_ms : </Col>
//                 <Col m={3}>
//                   {this.state.transaction.trx.transaction.max_cpu_usage_ms}
//                 </Col>
//               </Row>
//               <Row style={{ ...rowStyle }}>
//                 <Col m={2}></Col>
//                 <Col m={3}>max_net_usage_word : </Col>
//                 <Col m={3}>
//                   {this.state.transaction.trx.transaction.max_net_usage_word}
//                 </Col>
//               </Row>
//               <Row style={{ ...rowStyle }}>
//                 <Col m={2}></Col>
//                 <Col m={3}>ref_block_num : </Col>
//                 <Col m={3}>
//                   {this.state.transaction.trx.transaction.ref_block_num}
//                 </Col>
//               </Row>
//               <Row style={{ ...rowStyle }}>
//                 <Col m={2}></Col>
//                 <Col m={3}>ref_block_prefix : </Col>
//                 <Col m={3}>
//                   {this.state.transaction.trx.transaction.ref_block_prefix}
//                 </Col>
//               </Row>
//               <Row style={{ ...rowStyle }}>
//                 <Col m={12}>Actions : </Col>
//               </Row>
//             </Project>
//           </Arwes>
//         </div>
//       );
//     } catch (err) {
//       return <div>Error rendering : {err}</div>;
//     }
//   }
// }
