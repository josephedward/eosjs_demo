import React from "react";
import { Menu, Dropdown } from "semantic-ui-react";
import { Frame, Table } from "arwes";

let ChainInfoObj = [];

export default function ChainInfo(props) {
  ChainInfoObj = [];

  for (let x in Object(props.currentInfo)) {
    ChainInfoObj.push(
      <Frame>
        <Table animate headers={[x]} dataset={[[props.currentInfo[x]]]} />
      </Frame>
    );
  }

  return (
    <div>
      <Menu>
        <Dropdown
          text="Chain URL"
          style={{
            ...dropdownStyle,
          }}
          fluid
        >
          <Dropdown.Menu
            style={{
              ...itemStyle,
            }}
          >
            <Dropdown.Item
              style={{
                ...itemStyle,
              }}
              text="https://eos.dfuse.eosnation.io/"
              onClick={(text) => {
                props.setEndPointUrl("https://eos.dfuse.eosnation.io/");
              }}
            />
            <Dropdown.Item
              style={{
                ...itemStyle,
              }}
              text="https://api.testnet.eos.io"
              onClick={(text) => {
                props.setEndPointUrl("https://api.testnet.eos.io");
              }}
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu>

      <Frame show={true} animate={true} level={3} corners={4} layer="primary">
        {ChainInfoObj}
      </Frame>
    </div>
  );
}

const dropdownStyle = {
  color: "aqua",
  backgroundColor: "black",
};

const itemStyle = {
  backgroundColor: "aqua",
  border: "1px solid black",
};
