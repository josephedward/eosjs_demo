import React, { useState, useEffect, useRef, Fragment } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme, Arwes, Frame } from "arwes";
import Content from "arwes/lib/Content";
import ErrorBoundary from "./ErrorBoundary";
import Transaction from "./Transaction";

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
              <Transaction
                style={{ ...buttonStyle }}
                blockId={props.currentBlock.id}
                transactionObj={props.currentBlock.transactions}
              />
            ) : (
              <h5>Transactions : Empty</h5>
            )}
          </div>
        </Content>
      </Frame>
    </ErrorBoundary>
  );
}

const buttonStyle = {
  color: "white",
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




          {/* <div style={{ ...rowStyle }}>
            <h5>new_producers : </h5>{" "}
            <h5> {props.currentBlock.new_producers}</h5>
          </div>
          <div style={{ ...rowStyle }}>
            <h5>header_extensions : </h5>{" "}
            <h5> {props.currentBlock.header_extensions}</h5>
          </div> */}
          {/* {props.currentBlock.transactions.length!==0?(<TransitionablePortalExamplePortal/>):([])}  */}
          {/* {props.currentBlock.block_extensions !==""?(
            <div style={{ ...rowStyle }}>
            <h5>block_extensions : </h5>{" "}
            <h5> {props.currentBlock.block_extensions}</h5>
          </div>
          ):("")
               */
          /* <div style={{ ...rowStyle }}>
            <h5>block_extensions : </h5>{" "}
            <h5> {props.currentBlock.block_extensions}</h5>
          </div> */}