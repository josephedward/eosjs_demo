import React, { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";
import { Frame, Project, Table, Header } from "arwes";
import { Label, Menu } from "semantic-ui-react";
import { ThemeProvider, createTheme, Row, Col, Arwes, Blockquote } from "arwes";
import { Container, Modal } from "semantic-ui-react";
import { Button, Segment, TransitionablePortal } from "semantic-ui-react";
import { Redirect } from "react-router";
import ToObject from "es-abstract/5/ToObject";
import ErrorBoundary from "./ErrorBoundary";
import AbiDisplay from "./ABI";

export default function TransactionList(props) {
  return (
    <ErrorBoundary>
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
            Show Transactions [{props.transactionList.length}]
          </Button>
        }
      >
        <Modal.Content>
          <TListObj
            blockId={props.blockId}
            transactionList={props.transactionList}
          />
        </Modal.Content>
      </Modal>
    </ErrorBoundary>
  );
}

function TListObj(props) {
  console.log(props);
  let tList = [];
  for (let x = 0; x < props.transactionList.length; x++) {
    tList.push(
      <ErrorBoundary>
      <Frame style={{ ...rowStyle }}>
        <Header style={{ marginTop: "1%", marginBottom: "1%" }}>
          <strong>Transaction ID : </strong>
          {props.transactionList[x].trx.id}
        </Header>

        <p style={{ ...itemStyle }}>
          {props.transactionList[x].trx.signatures ? (
            <div>
              <strong>signatures: </strong>
              <SignatureObj
                signatures={props.transactionList[x].trx.signatures}
              />
            </div>
          ) : (
            ""
          )}

          {props.transactionList[x].cpu_usage_us ? (
            <div>
              <strong>cpu_usage_us: </strong>
              {props.transactionList[x].cpu_usage_us}
            </div>
          ) : (
            ""
          )}

          {props.transactionList[x].net_usage_words ? (
            <div>
              <strong>net_usage_words: </strong>
              {props.transactionList[x].net_usage_words}
            </div>
          ) : (
            ""
          )}

          {props.transactionList[x].status ? (
            <div>
              <strong>status: </strong> {props.transactionList[x].status}
            </div>
          ) : (
            ""
          )}

          {props.transactionList[x].trx.compression ? (
            <div>
              <strong>compression: </strong>
              {props.transactionList[x].trx.compression}
            </div>
          ) : (
            ""
          )}

          {props.transactionList[x].context_free_data ? (
            <div>
              <strong>context_free_data: </strong>
              {props.transactionList[x].context_free_data}
            </div>
          ) : (
            ""
          )}

          {props.transactionList[x].trx.packed_context_free_data ? (
            <div>
              <strong>packed_context_free_data: </strong>{" "}
              {props.transactionList[x].trx.packed_context_free_data}
            </div>
          ) : (
            ""
          )}

          {props.transactionList[x].trx.packed_trx ? (
            <div>
              <strong>packed_trx: </strong>
              <div
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {props.transactionList[x].trx.packed_trx}
              </div>
            </div>
          ) : (
            ""
          )}

            
          {props.transactionList[x].trx?.transaction?.expiration ? (
            <div>
              <strong>expiration: </strong>
              {props.transactionList[x].trx?.transaction?.expiration}
            </div>
          ) : (
            ""
          )}

          {props.transactionList[x].trx?.transaction?.delay_sec ? (
            <div>
              <strong>delay_sec: </strong>
              {props.transactionList[x].trx?.transaction?.delay_sec}
            </div>
          ) : (
            ""
          )}

          {props.transactionList[x].trx?.transaction?.ref_block_num ? (
            <div>
              <strong>ref_block_num: </strong>
              {props.transactionList[x].trx?.transaction?.ref_block_num}
            </div>
          ) : (
            ""
          )}

          {props.transactionList[x].trx?.transaction?.ref_block_prefix ? (
            <div>
              <strong>ref_block_prefix: </strong>
              {props.transactionList[x].trx?.transaction?.ref_block_prefix}
            </div>
          ) : (
            ""
          )}

          {props.transactionList[x].trx?.transaction?.max_cpu_usage_ms ? (
            <div>
              <strong>max_cpu_usage_ms: </strong>
              {props.transactionList[x].trx?.transaction?.max_cpu_usage_ms}
            </div>
          ) : (
            ""
          )}
          {props.transactionList[x].trx?.transaction?.max_net_usage_words ? (
            <div>
              <strong>max_net_usage_words: </strong>
              {props.transactionList[x].trx?.transaction?.max_net_usage_words}
            </div>
          ) : (
            ""
          )}
          {props.transactionList[x].trx?.transaction?.actions ? (
            <div>
              <strong>
                actions[
                {props.transactionList[x].trx?.transaction?.actions.length}]:{" "}
              </strong>
              <ActionObj
                actions={props.transactionList[x].trx?.transaction?.actions}
              />
            </div>
          ) : (
            ""
          )}
        </p>
      </Frame>
      </ErrorBoundary>
    );
  }
  try {
    return <Arwes style={{ ...frameStyle }}>{tList}</Arwes>;
  } catch (err) {
    console.log(err);
    window.location.reload();
  }
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
      <ErrorBoundary>
      <div style={{ ...actionStyle }}>
            <AbiDisplay 
            accountName={props.actions[x].account} />
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
          <strong>data: </strong>
          <Blockquote layer="success">
            <DataObj data={props.actions[x].data} />
            {/* {props.actions[x].data} */}
          </Blockquote>
        </div>
      </div>
      </ErrorBoundary>
    );
  }
  return <div>{actList}</div>;
}

function AuthorizationObj(props) {
  let authList = [];
  for (let x = 0; x < props.authorization.length; x++) {
    authList.push(
      <div style={{ ...leftStyle }}>
        <div>
          <strong>actor : </strong>
          {props.authorization[x].actor}
        </div>
        <div>
          <strong>permission : </strong>
          {props.authorization[x].permission}
        </div>
      </div>
    );
  }
  return <div>{authList}</div>;
}

function DataObj(props) {
  let dataList = [];
  if (!props.data["0"]) {
    for (let x in props.data) {
      dataList.push(
        <div style={{ ...dataStyle }}>
          <strong>{x} : </strong>
          <div>{props.data[x].toString()}</div>
        </div>
      );
    }
  } else {
    dataList.push("no data");
  }
  return <div>{dataList}</div>;
}

const leftStyle = {
  marginLeft: "2.5%",
};

const actionStyle = {
  marginLeft: "2.5%",
  textOverflow: "wrap",
  whiteSpace: "wrap",
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
  // overflowX: "scroll",
  wordBreak: "break-all",
  textOverflow: "ellipsis",
  whiteSpace: "wrap",
};

const transactionStyle = {
  height: "80%",
  width: "80%",
  wordBreak: "break-all",
  textOverflow: "ellipsis",
  whiteSpace: "wrap",
};

const buttonStyle = {
  position: "absolute",
  zIndex: 50,
};

const rowStyle = {
  marginTop: "5%",
  marginBottom: "5%",
  wordBreak: "break-all",
  textOverflow: "ellipsis",
  whiteSpace: "wrap",
};

const frameStyle = {
  height: "100%",
  width: "100%",
};

const projectStyle = {
  height: "100%",
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
