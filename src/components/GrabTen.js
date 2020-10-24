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
  SoundsProvider,
  createSounds,
  Button,
} from "arwes";
import Content from "arwes/lib/Content";
import ErrorBoundary from "../components/ErrorBoundary";
import Block from "../components/Block";
import { useTimer } from "use-timer";
import { Menu, Grid, Image, Popup } from "semantic-ui-react";
import { opacify } from "polished";
import { JsonToTable } from "react-json-to-table";
import Header from "../components/Header.js";
import BlockFeed from "../components/BlockFeed.js";

export default function GrabTen(props) {
  return (
    // <ErrorBoundary>
    <div>
      <Frame
        style={{ margin: "2.5%" }}
        show={true}
        animate={true}
        level={3}
        // corners={4}
        layer="primary"
      >
        <Button
          style={{ ...centerStyle }}
          onClick={() => {
            props.grabTen(props.currentBlock.block_num);
          }}
        >
          Get Latest Ten Blocks
        </Button>
        {props.tenLatestBlocks.length > 0 ? (
          <div style={{ ...listStyle }}>
            {props.tenLatestBlocks
              .slice(0)
              .reverse()
              .map((book) => (
                <Block animate currentBlock={book} />
              ))}
          </div>
        ) : (
          ""
        )}
      </Frame>
    </div>
    // </ErrorBoundary>
  );
}

const centerStyle = {
  width: "100%",
  margin: "5%",
  // height:"100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  textAlign: "center",
};

const listStyle = {
  marginTop: "2.5%",
};
