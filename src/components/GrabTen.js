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
  // SoundsProvider,
  // createSounds,
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


export default function GrabTen(props){
    return(
        <div>
        <Button
        style={{ ...centerStyle, margin: "2.5vh" }}
        onClick={() => {
          props.grabTen(props.currentBlock.block_num);
        }}
      >
        Get Latest Ten Blocks
      </Button>

      {props.tenLatestBlocks.length > 0 ? (
        <Frame
          style={{
            width: "100%",
            height: "100vh",
            overflowY: "scroll",
            right: 0,
          }}
        >
          <div style={{ ...listStyle }}>
            {props.tenLatestBlocks
              .slice(0)
              .reverse()
              .map((book) => (
                <Block animate currentBlock={book} />
              ))}
          </div>
        </Frame>
      ) : (
        ""
      )}
      </div>
    )
}

const centerStyle = {
    width: "100%",
    // height:"100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
  };

  const listStyle = {
    marginTop: "10%",
  };
  