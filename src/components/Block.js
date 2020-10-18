import React, { useState, useEffect, useRef, Fragment } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme, Arwes, Frame, Heading } from "arwes";
import Content from "arwes/lib/Content";
import ErrorBoundary from "./ErrorBoundary";
// import Transaction from "../../misc/Transaction";
import TransactionList from "./Transaction";
import { Button } from "semantic-ui-react";
import { Redirect } from "react-router";

export default function Block(props) {
  
try{
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
          <h2>BLOCK ID: </h2>
          <h3>{props.currentBlock.id}</h3>
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
            <h5>previous : </h5>
          </div>
          <div style={{ ...rowStyle }}>
            <h5> {props.currentBlock.previous}</h5>
          </div>
          <div style={{ ...rowStyle }}>
            <h5>transaction_mroot : </h5>{" "}
          </div>
          <div style={{ ...rowStyle }}>
            <h5> {props.currentBlock.transaction_mroot}</h5>
          </div>
          <div style={{ ...rowStyle }}>
            <h5>action_mroot : </h5>
          </div>
          <div style={{ ...rowStyle }}>
            <h5 style={{ wordWrap: "break-word" }}>
              {" "}
              {props.currentBlock.action_mroot}
            </h5>
          </div>
          <div style={{ ...rowStyle }}>
            <h5>schedule_version : </h5>{" "}
            <h5> {props.currentBlock.schedule_version}</h5>
          </div>
          <div style={{ ...rowStyle }}>
            <h5>producer_signature : </h5>{" "}
          </div>
          <div style={{ ...rowStyle }}>
            <h5 style={{ wordWrap: "break-word" }}>
              {" "}
              {props.currentBlock.producer_signature}
            </h5>
          </div>

          <div style={{ ...rowStyle }}>
            <h5>block_num : </h5> <h5> {props.currentBlock.block_num}</h5>
          </div>
          <div style={{ ...rowStyle }}>
            <h5>ref_block_prefix : </h5>{" "}
            <h5> {props.currentBlock.ref_block_prefix}</h5>
          </div>
          <div style={{ ...rowStyle }}>
            {props.currentBlock.staticFlag == true ? (
              props.currentBlock.transactions.length > 0 ? (
                <div style={{ ...rowStyle }}>
                  <TransactionList
                    style={{ ...buttonStyle, position: "absolute" }}
                    blockId={props.currentBlock.id}
                    transactionList={props.currentBlock.transactions}
                  />
                </div>
              ) : (
                <h5>no transactions</h5>
              )
            ) : (
              ""
            )}
          </div>
        </Content>
      </Frame>
    </ErrorBoundary>
  );}
  catch(err){
    console.log(err)
    window.location.reload()
  }
}

const buttonStyle = {
  display: "block",
  position: "absolute",
  height: "100px",
  width: "100px",
  // backgroundColor:"red",
  // zIndex:50
};

const rowStyle = {
  display: "flex",
  flexDirection: "row",
  overflow: "hidden",
  // textOverflow: "ellipsis",
  // "white-space": "nowrap",

  //   lineHeight: '20px',
  //   padding:"5%",
  height: "20px",
};

const blockStyle = {
  margin: "5%",
  height: "100%",
  //   overflowWrap:"anywhere",
  // overflow: 'hidden',
  // textOverflow: 'ellipsis',
  // 'white-space': 'nowrap',
  // width:"425px",
  wordBreak: "break-all",
  // // textOverflow: "ellipsis",
  // // "white-space": "pre-line",
  // whiteSpace: "normal",
  //   width:"400px",
  // lineHeight: '20px',
  // position: 'relative'
};
