import React, { useState } from "react";
import { Arwes, Frame, Heading, Button } from "arwes";
import ErrorBoundary from "./ErrorBoundary";
import { Modal, Container, Input } from "semantic-ui-react";
import JSONTree from "react-json-tree";

const { JsonRpc } = require("eosjs");
const fetch = require("node-fetch"); 
let endPointUrl = "https://api.eosdetroit.io:443";
const rpc = new JsonRpc(endPointUrl, { fetch });
let AbiObj;

export default function AbiDisplay(props) {
  const [accountName, setAccountName] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <ErrorBoundary>
      <Frame
        style={{
          objectFit: "contain",
          backgroundColor: "black",
        }}
        show={true}
        animate={true}
        level={3}
        corners={4}
        layer="primary"
      >
        <form onSubmit={handleSubmit}>
          <Container
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              margin: "1%",
              padding: "1%",
              paddingLeft: "5%",
              paddingRight: "5%",
              objectFit: "contain",
            }}
          >
            <Input
              inverted
              style={{
                height: "40px",
                backgroundColor: "black",
              }}
              icon="search"
              name="search"
              placeholder="Search ABI"
              onChange={(e) => setAccountName(e.target.value)}
            />
            <Modal
              style={{
                ...transactionStyle,
              }}
              trigger={
                <Button
                  type="submit"
                  layer="success"
                  onClick={(props) => {
                    (async (props) => {
                      console.log(accountName);
                      let AbiResponse = await rpc.get_abi(accountName);
                      AbiObj = AbiResponse.abi;
                    })();
                  }}
                >
                  Search Account
                </Button>
              }
            >
              <Modal.Content>
                <Arwes>
                  <Frame
                    style={{
                      objectFit: "contain",
                    }}
                  >
                    <Heading>
                      <h2>Account Name: </h2>
                      {accountName}
                    </Heading>

                    <JSONTree
                      style={{
                        objectFit: "contain",
                      }}
                      data={AbiObj}
                      theme={theme}
                      invertTheme={false}
                    />
                  </Frame>
                </Arwes>
              </Modal.Content>
            </Modal>
          </Container>
        </form>
      </Frame>
      {/* </Arwes> */}
    </ErrorBoundary>
  );
}

const transactionStyle = {
  height: "60%",
  width: "80%",
  objectFit: "cover",
  wordBreak: "break-all",
  textOverflow: "ellipsis",
  whiteSpace: "wrap",
  border: "1px solid aqua",
};

const theme = {
  scheme: "monokai",
  author: "wimer hazenberg (http://www.monokai.nl)",
  base00: "#272822",
  base01: "#383830",
  base02: "#49483e",
  base03: "#75715e",
  base04: "#a59f85",
  base05: "#f8f8f2",
  base06: "#f5f4f1",
  base07: "#f9f8f5",
  base08: "#f92672",
  base09: "#fd971f",
  base0A: "#f4bf75",
  base0B: "#a6e22e",
  base0C: "#a1efe4",
  base0D: "#66d9ef",
  base0E: "#ae81ff",
  base0F: "#cc6633",
};

