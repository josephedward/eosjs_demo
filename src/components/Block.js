import React, { useState, useEffect, useRef, Fragment } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme, Arwes, Frame } from "arwes";
import Content from "arwes/lib/Content";
import ErrorBoundary from "./ErrorBoundary";

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
        <Content style={{ margin: "5%" }}>
          <div style={{ ...rowStyle }}>
            <h5>timestamp : </h5>
            <h6> {props.currentBlock.timestamp}</h6>
          </div>
          <div style={{ ...rowStyle }}>
            <h5>producer : </h5> <h6> {props.currentBlock.producer}</h6>
          </div>
          <div style={{ ...rowStyle }}>
            <h5>confirmed : </h5> <h6> {props.currentBlock.confirmed}</h6>
          </div>
          <div style={{ ...rowStyle }}>
            <h5>previous : </h5> <h6> {props.currentBlock.previous}</h6>
          </div>
          <div style={{ ...rowStyle }}>
            <h5>transaction_mroot : </h5>{" "}
            <h6> {props.currentBlock.transaction_mroot}</h6>
          </div>
          <div style={{ ...rowStyle }}>
            <h5>action_mroot : </h5> <h6> {props.currentBlock.action_mroot}</h6>
          </div>
          <div style={{ ...rowStyle }}>
            <h5>schedule_version : </h5>{" "}
            <h6> {props.currentBlock.schedule_version}</h6>
          </div>
          <div style={{ ...rowStyle }}>
            <h5>new_producers : </h5>{" "}
            <h6> {props.currentBlock.new_producers}</h6>
          </div>
          <div style={{ ...rowStyle }}>
            <h5>header_extensions : </h5>{" "}
            <h6> {props.currentBlock.header_extensions}</h6>
          </div>
          <div style={{ ...rowStyle }}>
            <h5>producer_signature : </h5>{" "}
            <h6> {props.currentBlock.producer_signature}</h6>
          </div>
          <div style={{ ...rowStyle }}>
            <h5>transactions : </h5>
          </div>
          <div style={{ ...rowStyle }}>
            <h5>block_extensions : </h5>{" "}
            <h6> {props.currentBlock.block_extensions}</h6>
          </div>
          <div style={{ ...rowStyle }}>
            <h5>id : </h5> <h6> {props.currentBlock.id}</h6>
          </div>
          <div style={{ ...rowStyle }}>
            <h5>block_num : </h5> <h6> {props.currentBlock.block_num}</h6>
          </div>
          <div style={{ ...rowStyle }}>
            <h5>ref_block_prefix : </h5>{" "}
            <h6> {props.currentBlock.ref_block_prefix}</h6>
          </div>
        </Content>
      </Frame>
    </ErrorBoundary>
  );
}

const rowStyle = {
  display: "flex",
  flexDirection: "row",
  lineHeight: 0,
};

const blockStyle = {
  // display: "flex",
  // flexDirection: "row",
  // lineHeight: 0,
  margin: "5%",
};
