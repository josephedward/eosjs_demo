import React, { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";
import {
  Frame,
  Project,
  // Table
} from "arwes";
import { Label, Menu, Table } from "semantic-ui-react";
import { ThemeProvider, createTheme, Row, Col } from "arwes";
import { Container } from "semantic-ui-react";

export default class AccordionExampleStandard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blockId: "test",
      transaction: fakeTransaction,
      open: false,
      activeIndex: 0,
    };
  }

  //  for dropdown
  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state.activeIndex;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state.activeIndex;

    let tHeader = "Transaction ID: " + this.state.transaction.trx.id;
    return (
      <div>
        <Project style={{ ...projectStyle }} header={tHeader}>
          <Row style={{ ...rowStyle }}>
            <Col m={2}>cpu_usage_us : </Col>
            <Col m={9}>{this.state.transaction.cpu_usage_us}</Col>
          </Row>
          <Row style={{ ...rowStyle }}>
            <Col m={2}>net_usage_words : </Col>
            <Col m={9}>{this.state.transaction.net_usage_words}</Col>
          </Row>
          <Row style={{ ...rowStyle }}>
            <Col m={2}>status : </Col>
            <Col m={9}>{this.state.transaction.status}</Col>
          </Row>
          <Row style={{ ...rowStyle }}></Row>
          <Row style={{ ...rowStyle }}>
            <Col m={12}>TRX: </Col>
            {/* <Col m={4}>Second Column</Col> */}
          </Row>
          <Row style={{ ...rowStyle }}>
            <Col m={2}></Col>
            <Col m={3}>compression : </Col>
            <Col m={3}>{this.state.transaction.trx.compression}</Col>
          </Row>
          <Row style={{ ...rowStyle }}>
            <Col m={2}></Col>
            <Col m={3}>context_free_data : </Col>
            <Col m={3}>
              {this.state.transaction.trx.context_free_data.forEach((cfd) => (
                <div style={{ ...rowStyle }}>{cfd}</div>
              ))}
            </Col>
          </Row>
          <Row style={{ ...rowStyle }}>
            <Col m={2}></Col>
            <Col m={3}>packed_context_free_data : </Col>
            <Col m={3}>
              {this.state.transaction.trx.packed_context_free_data}
            </Col>
          </Row>
          <Row style={{ ...rowStyle }}>
            <Col m={2}></Col>
            <Col m={3}>packed_trx : </Col>
            <Col m={3}>{this.state.transaction.trx.packed_trx}</Col>
          </Row>
          <Row style={{ ...rowStyle }}>
            <Col m={2}></Col>
            <Col m={3}>signatures : </Col>
          </Row>
          <Row>
            <Col m={2}></Col>
            <Col m={10}>
              <Frame style={{ ...frameStyle }}>
                {this.state.transaction.trx.signatures.map((sig) => (
                  <getSigs sig={sig} />
                ))}
              </Frame>
            </Col>
          </Row>
          <Row style={{ ...rowStyle }}>
            <Col m={12}>Transaction Detail : </Col>
            {/* <Col m={4}>Second Column</Col> */}
          </Row>
          <Row style={{ ...rowStyle }}>
            <Col m={2}></Col>
            <Col m={3}>context_free_actions : </Col>
            <Col m={3}>
              {this.state.transaction.trx.transaction.context_free_actions}
            </Col>
          </Row>
          <Row style={{ ...rowStyle }}>
            <Col m={2}></Col>
            <Col m={3}>delay_sec : </Col>
            <Col m={3}>{this.state.transaction.trx.transaction.delay_sec}</Col>
          </Row>
          <Row style={{ ...rowStyle }}>
            <Col m={2}></Col>
            <Col m={3}>expiration : </Col>
            <Col m={3}>{this.state.transaction.trx.transaction.expiration}</Col>
          </Row>
          <Row style={{ ...rowStyle }}>
            <Col m={2}></Col>
            <Col m={3}>max_cpu_usage_ms : </Col>
            <Col m={3}>
              {this.state.transaction.trx.transaction.max_cpu_usage_ms}
            </Col>
          </Row>
          <Row style={{ ...rowStyle }}>
            <Col m={2}></Col>
            <Col m={3}>max_net_usage_word : </Col>
            <Col m={3}>
              {this.state.transaction.trx.transaction.max_net_usage_word}
            </Col>
          </Row>
          <Row style={{ ...rowStyle }}>
            <Col m={2}></Col>
            <Col m={3}>ref_block_num : </Col>
            <Col m={3}>{this.state.transaction.trx.transaction.ref_block_num}</Col>
          </Row>
          <Row style={{ ...rowStyle }}>
            <Col m={2}></Col>
            <Col m={3}>ref_block_prefix : </Col>
            <Col m={3}>
              {this.state.transaction.trx.transaction.ref_block_prefix}
            </Col>
          </Row>
          <Row style={{ ...rowStyle }}>
            <Col m={12}>Actions : </Col>
            {/* <Col m={4}>Second Column</Col> */}
          </Row>
        </Project>
      </div>
    );
  }
}

function getSigs(props) {
  return <div>{props.sig}</div>;
}

const frameStyle = {
  height: "50px",
  width: "100%",
};

const rowStyle = {
  height: "12.5px",
};

const projectStyle = {
//   margin: "2.5%",
//   overflow: "scroll",
};

const accordionStyle = {
  color: "white",
};

const fakeTransaction = {
  cpu_usage_us: 212,
  net_usage_words: 13,
  status: "executed",
  trx: {
    compression: "none",
    context_free_data: [],
    id: "b9caafd0a02836510d3c54ae8e636a9f7921e5b966fb2020c9442e8dc20d5824",
    packed_context_free_data: "",
    packed_trx:
      "0d6e815f6bab3ca76bb8000000000180b535d2ccb9a78a000000000075e8ad0180b535d2ccb9a78a00000000a8ed323208335c00000000000000",

    signatures: [
      "SIG_K1_K3VNDhTSeXeUv7TMoE86SANSG8S4ktY29ARFyawmtijtsJjSaPiiwf8JWS7aw8QunjtbPzDwpgATQegY1ofc9THm9JNJsj",
      "SIG_K1_K3VNDhTSeXeUv7TMoE86SANSG8S4ktY29ARFyawmtijtsJjSaPiiwf8JWS7aw8QunjtbPzDwpgATQegY1ofc9THm9JNJsj",
    ],
    transaction: {
      actions: [
        {
          account: "lenvnnamaqus",
          authorization: [
            {
              actor: "lenvnnamaqus",
              permission: "active",
            },
          ],
          data: { number: 23603 },
          hex_data: "335c000000000000",
          name: "probe",
        },
      ],
      context_free_actions: [],
      delay_sec: 0,
      expiration: "2020-10-10T08:17:17",
      max_cpu_usage_ms: 0,
      max_net_usage_words: 0,
      ref_block_num: 43883,
      ref_block_prefix: 3094062908,
    },
  },
};

// import React, { Component } from "react";
// import {
//   Button,
//   Header,
//   Segment,
//   TransitionablePortal,
// } from "semantic-ui-react";
// import {
//   // Button,
//   Frame,
//   Project,
//   Words,
//   Table,
// } from "arwes";
// import Arwes from "arwes/lib/Arwes";
// import { Grid, Image } from "semantic-ui-react";

// export default class TransactionTest extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       blockId: "test",
//       transaction: fakeTransaction,
//       open: false,
//     };
//   }

//   //   state = { open: false }
//   handleOpen = () => this.setState({ open: true });
//   handleClose = () => this.setState({ open: false });

//   render(props) {
//     const { open } = this.state.open;
//     console.log("table -> this.state.transactionArr : ");
//     console.log(this.state.transaction);
//     let tempHeader = "BLOCK ID : " + this.state.blockId;

//     let l1Keys = [];
//     let l1Vals = [];
//     let trx;
//     let trxKeys;
//     let trxVals;
//     for (let x in this.state.transaction) {
//       console.log(x, " : ", this.state.transaction[x]);
//       l1Keys.push(x);
//       l1Vals.push(this.state.transaction[x]);
//     }
//     trx = l1Vals[l1Vals.length - 1];
//     l1Vals.pop();
//     console.log(trx);
//     trxKeys = Object.keys(trx);
//     trxVals = Object.values(trx);

//     return (

//         //   <Frame style={{...frameStyle}}>
//             <div style={{ padding: 20, margin: "5%" }}>
//               {/* <Project animate header={tempHeader}> */}
//                 {
//                   <div>
//                     <Grid celled columns={3}>
//                       <Grid.Row>
//                         <div style={{ ...rowStyle }}>
//                           {l1Keys.map((key) => (
//                             <Grid.Column style={{ ...colStyle }} width={4}>
//                               <div style={{ ...rowStyle }}>{key}</div>
//                             </Grid.Column>
//                           ))}
//                         </div>
//                       </Grid.Row>
//                       <Grid.Row>
//                         <div style={{ ...rowStyle }}>
//                           {l1Vals.map((val) => (
//                             <Grid.Column style={{ ...colStyle }} width={4}>
//                               <div style={{ ...rowStyle }}>{val}</div>
//                             </Grid.Column>
//                           ))}
//                           {/* <div
//                     style={{...trxStyle}}
//                     > */}
//                           <Grid.Column style={{ ...colStyle }}>
//                             {/* TRX GRID */}
//                             <Grid>
//                               <Grid.Row>
//                                 <div style={{ ...rowStyle }}>
//                                   {trxKeys.map((key) => (
//                                     <Grid.Column
//                                       style={{ ...colStyle }}
//                                       width={4}
//                                     >
//                                       <div style={{ ...rowStyle }}>{key}</div>
//                                     </Grid.Column>
//                                   ))}
//                                 </div>
//                               </Grid.Row>
//                               <Grid.Row>
//                                 {/* <div style={{ ...rowStyle }}>
//                                   {trxVals.map((val) => (
//                                     <Grid.Column
//                                       style={{ ...colStyle }}
//                                       width={4}
//                                     >
//                                       <div style={{ ...rowStyle }}>{val}</div>
//                                     </Grid.Column>
//                                   ))}
//                                 </div> */}
//                               </Grid.Row>
//                             </Grid>
//                             {/* TRX GRID */}
//                           </Grid.Column>
//                         </div>
//                       </Grid.Row>
//                     </Grid>
//                   </div>
//                 }
//             </div>

//     //   </Frame>
//     );
//   }
// }

// const trxStyle = {
//   border: "2px solid aqua",
//   outline: "2px solid aqua",
// };

// const colStyle = {
//   width: "30px",
//   marginRight: "10%",
//   marginLeft: "10%",
// };

// const buttonStyle = {
//   width: "20%",
//   backgroundColor: "black",
//   color: "lightGreen",
//   border: "2px solid aqua",
//   top: "0%",
// };

// const blockStyle = {
//   margin: "5%",
// };
// const rowStyle = {
//   display: "flex",
//   flexDirection: "row",
//   //   lineHeight: 0,
//   margin: "1%",
//   color: "white",
// };

// const frameStyle={
//     overflowX:"scroll"
// }
{
  /* <Table
            animate
            headers={["cpu_usage_us", "net_usage_words", "status"]}
            dataset={[
              [
                this.state.transaction.cpu_usage_us,
                this.state.transaction.net_usage_words,
                this.state.transaction.status,
              ],
            ]} */
}

{
  /* </Project> */
}

{
  /* <Project style={{ ...projectStyle }} header="TRX"> */
}
{
  /* <Table
            animate
            headers={["compression", "context_free_data", "packed_context_free_data", "test"]}
            dataset={[
                [
                  this.state.transaction.trx.compression?(this.state.transaction.trx.compression):(0),
                  this.state.transaction.trx.context_free_data.length!=0?(this.state.transaction.trx.context_free_data):([]),
                  this.state.transaction.trx.packed_context_free_data?(this.state.transaction.trx.packed_context_free_data):(0),
                  this.state.transaction.trx.packed_trx?(this.state.transaction.trx.packed_trx):(0),
                  // this.state.transaction.trx.signatures,
                  // this.state.transaction.trx.transaction
                ],
              ]}
 
          /> */
}
{
  /* </Project> */
}
{
  /* style={{ ...projectStyle }} */
}

{
  /* <Project style={{ ...projectStyle }}  header="TRX"> */
}
{
  /* <Table
              animate
              headers={[ "compression", "context_free_data", "packed_context_free_data",
            //    "packed_trx"
               ]}
                // "signatures", "transaction"
              
              dataset={[
                [
                  this.state.transaction.trx.compression?(this.state.transaction.trx.compression):(0),
                  this.state.transaction.trx.context_free_data.length!=0?(this.state.transaction.trx.context_free_data):(0),
                  this.state.transaction.trx.packed_context_free_data?(this.state.transaction.trx.packed_context_free_data):(0),
                //   this.state.transaction.trx.packed_trx?(this.state.transaction.trx.packed_trx):(0),
                  // this.state.transaction.trx.signatures,
                  // this.state.transaction.trx.transaction
                ],
              ]}
            /> */
}
