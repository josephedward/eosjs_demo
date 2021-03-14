import React from "react";
import { Frame, Heading, Button } from "arwes";
import { Menu } from "semantic-ui-react";

export default function Header(props) {
  return (
    <Frame show={true} animate={true} level={3} layer="primary">
      <Menu
        style={{
          height: "25px",
          justifyContent: "center",
          margin: "0 auto",
          bottom: 0,
          marginBottom: 0,
          backgroundColor: "black",
          "-webkit-text-stroke": "1px white",
        }}
        celled
        stackable
      >
        <Menu.Item>
          <h1>EOS CHAIN NAVIGATOR</h1>
        </Menu.Item>
      </Menu>
      <Menu
        style={{
          height: "10%",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "black",
          "-webkit-text-stroke": "1px white",
          top: "0",
          marginTop: "0",
        }}
        stackable
      >
        <Menu.Item position="left">
          <div
            style={{
              justifyContent: "column",
            }}
          >
            <h2
              style={{
                color: "blue",
                textAlign: "center",
              }}
            >
              RPC-API-URL endpoint:
              <br />
              {props.endPointUrl}
            </h2>
            <div
              style={{
                ...dropdownStyle,
              }}
            ></div>
          </div>
        </Menu.Item>

        <Menu.Item style={{ marginLeft: "10%" }}>
          <Button
            style={{
              color: "aqua",
              border: "3px solid black",
              outline: "3px solid aqua",
              webkitTextStroke: "1px blue",
            }}
            onClick={() => {
              props.setMainFlag("getTenBlocks");
            }}
            href="/"
          >
            Block Explorer
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button
            style={{
              color: "aqua",
              border: "3px solid black",
              outline: "3px solid aqua",
              webkitTextStroke: "1px blue",
            }}
            onClick={() => {
              props.setMainFlag("searchAbi");
            }}
            href="/"
          >
            Search ABI
          </Button>
        </Menu.Item>

        <Menu.Item
          style={{
            justifyContent: "right",
          }}
          position="right"
        >
          <Frame
            style={{ ...blockStyle }}
            show={true}
            animate={true}
            level={3}
            corners={4}
            layer="primary"
          >
            <Heading>Chain Height :{props.currentBlock.block_num} </Heading>
          </Frame>
        </Menu.Item>
      </Menu>
    </Frame>
  );
}

const blockStyle = {
  wordBreak: "break-all",
};

const dropdownStyle = {
  color: "aqua",
  backgroundColor: "black",
};

// {/* // "https://api.eosdetroit.io:443";
// // "https://api.eosio.cr:80"
// // "https://api.testnet.eos.io";
// "https://eos.dfuse.eosnation.io/"
// // "https://api.eosnewyork.io/v1/chain/get_info" */}
