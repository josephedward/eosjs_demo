import React, { useState, useEffect, useRef, Fragment } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme, Arwes, Frame } from "arwes";
import Content from "arwes/lib/Content";
import ErrorBoundary from "./ErrorBoundary";
// import Transaction from "../../misc/Transaction";
import Transaction from "./Transaction";
import TransactionRedirect from "./TransactionRedirect";
import { Button } from "semantic-ui-react";
import { Redirect } from "react-router";

export default function Block(props) {
  return (
    <ErrorBoundary>
      <Frame
        style={{ ...blockStyle }}
        show={true}
        animate={true}
        level={3}
        corners={4}
        layer="primary"
      >
        <Content animate layer="success" style={{ margin: "5%" }}>
          <div style={{ ...rowStyle }}>
            <h5>timestamp : </h5>
            <h5> {props.currentBlock.timestamp}</h5>
          </div>
          <div style={{ ...rowStyle }}>
            <h5>producer : </h5> <h5> {props.currentBlock.producer}</h5>
          </div>
          <div style={{ ...rowStyle }}>
            <h5>confirmed : </h5> <h5> {props.currentBlock.confirmed}</h5>
          </div>
          <div style={{ ...rowStyle }}>
            <h5>previous : </h5> <h5> {props.currentBlock.previous}</h5>
          </div>
          <div style={{ ...rowStyle }}>
            <h5>transaction_mroot : </h5>{" "}
            <h5> {props.currentBlock.transaction_mroot}</h5>
          </div>
          <div style={{ ...rowStyle }}>
            <h5>action_mroot : </h5> <h5> {props.currentBlock.action_mroot}</h5>
          </div>
          <div style={{ ...rowStyle }}>
            <h5>schedule_version : </h5>{" "}
            <h5> {props.currentBlock.schedule_version}</h5>
          </div>
          <div style={{ ...rowStyle }}>
            <h5>producer_signature : </h5>{" "}
          </div>
          <div style={{ ...rowStyle }}>
            <h5> {props.currentBlock.producer_signature}</h5>
          </div>

          <div style={{ ...rowStyle }}>
            <h5>id : </h5> <h5> {props.currentBlock.id}</h5>
          </div>
          <div style={{ ...rowStyle }}>
            <h5>block_num : </h5> <h5> {props.currentBlock.block_num}</h5>
          </div>
          <div style={{ ...rowStyle }}>
            <h5>ref_block_prefix : </h5>{" "}
            <h5> {props.currentBlock.ref_block_prefix}</h5>
          </div>
          <div style={{ ...rowStyle }}>
            {props.currentBlock.transactions.length != 0 ? (
              <h5>Transactions : []</h5>
            ) : (
              <h5>Transactions : Empty</h5>
            )}
          </div>
        </Content>
      </Frame>
    </ErrorBoundary>
  );
}

// const buttonStyle = {
//   color: "white",
// };

function reDirectTransaction() {
  return <Redirect to="/transaction" />;
}

const buttonStyle = {
  width: "20%",
  backgroundColor: "black",
  color: "lightGreen",
  border: "2px solid aqua",
  top: "0%",
};

const rowStyle = {
  display: "flex",
  flexDirection: "row",
  lineHeight: 0,
  padding: 0,
  height: "20px",
};

const prodSigStyle = {
  marginBottom: 0,
};

const blockStyle = {
  margin: "5%",
};
