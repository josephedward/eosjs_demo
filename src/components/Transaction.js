import React, { Component } from 'react'
import {
  Button,
  Header,
  Segment,
  TransitionablePortal,

} from 'semantic-ui-react'
import {
    // Button, 
    Frame, Project , Words, Table} from 'arwes'
import Arwes from 'arwes/lib/Arwes'


export default class Transaction extends Component {


    constructor(props) {
        super(props);
        this.state = {
        blockId: props.blockId,
        transactionObj: props.transactionObj,
        open: false
        };
        }
        
//   state = { open: false }
  handleOpen = () => this.setState({ open: true })
  handleClose = () => this.setState({ open: false })

  render(props) {
    const { open } = this.state.open
   console.log("this.state.transactionObj : ",this.state.transactionObj)
   let tempHeader= 'BLOCK ID : '+this.state.blockId

    return (
      <TransitionablePortal
        closeOnTriggerClick
        onOpen={this.handleOpen}
        onClose={this.handleClose}
        openOnTriggerClick
        trigger={
          <Button
          animate 
          layer="success"
          style={{...buttonStyle}}
            content={open ? 'Close Transactions' : 'Open Transactions'}
            negative={open}
            positive={!open}
          />
        }
      >
      <Frame>
      <div style={{ padding: 20, margin:"5%"  }}>
            <Project
                animate
                header={tempHeader}
            >
                {anim => (
                    <div>
                    <Table
                    animate
                    headers={Object.keys(this.state.transactionObj)}
                    dataset={[Object.keys(this.state.transactionObj)]}
                    />
                        
                    </div>
                )}
            </Project>
        </div>
      </Frame>
      </TransitionablePortal>
    )
  }
}

const buttonStyle ={
    width:"20%",
    backgroundColor:"black",
    color:"lightGreen",
    border:"2px solid aqua",
    top:"0%",
}

const blockStyle = {
    margin: "5%",
 };
 
 const rowStyle = {
    display: "flex",
    flexDirection: "row",
    lineHeight: 0,
  };

const fakeTransactions=[{
        cpu_usage_us: 212,
        net_usage_words: 13,
        status: "executed",
        trx:{
            compression: "none",
            context_free_data: [],            
            id: "b9caafd0a02836510d3c54ae8e636a9f7921e5b966fb2020c9442e8dc20d5824",
            packed_context_free_data: "",
            packed_trx: "0d6e815f6bab3ca76bb8000000000180b535d2ccb9a78a000000000075e8ad0180b535d2ccb9a78a00000000a8ed323208335c00000000000000",
            signatures: ["SIG_K1_K3VNDhTSeXeUv7TMoE86SANSG8S4ktY29ARFyawmtijtsJjSaPiiwf8JWS7aw8QunjtbPzDwpgATQegY1ofc9THm9JNJsj"],
            transaction:{
                actions:[{
                    account: "lenvnnamaqus",
                    authorization: [{
                        actor: "lenvnnamaqus",
                        permission: "active"
                    }],
                    data:{number: 23603},
                    hex_data: "335c000000000000",
                    name: "probe"
                }], 
                context_free_actions: [],
                delay_sec: 0,
                expiration: "2020-10-10T08:17:17",
                max_cpu_usage_ms: 0,
                max_net_usage_words: 0,
                ref_block_num: 43883,
                ref_block_prefix: 3094062908
            }
            }
}]