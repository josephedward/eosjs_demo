import React from "react";
import { Frame, Button } from "arwes";
import Block from "../components/Block";

export default function GrabTen(props) {
  return (
    <div>
      <Frame
        style={{ margin: "2.5%" }}
        show={true}
        animate={true}
        level={3}
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
  );
}

const centerStyle = {
  width: "100%",
  margin: "5%",
  padding: "0px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  textAlign: "center",
};

const listStyle = {
  marginTop: "2.5%",
};
