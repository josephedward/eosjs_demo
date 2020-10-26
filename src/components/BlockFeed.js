import React
 from "react";
import Block from "../components/Block";

export default function BlockFeed(props) {
  return (
      <div >
        {props.recentBlocks
          .slice(0)
          .reverse()
          .map((book) => (
            <Block animate={true} class="intervalBlock" currentBlock={book} />
          ))}
      </div>
    // </div>
  );
}


