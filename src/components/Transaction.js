import React, { Component } from 'react'
import {
  Button,
  Header,
  Segment,
  TransitionablePortal,
} from 'semantic-ui-react'
import {
    // Button, 
    Frame, Project , Words} from 'arwes'
import Arwes from 'arwes/lib/Arwes'


export default class Transaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
        blockId: props.blockId,
        open: false
        };
        }
        
//   state = { open: false }
  handleOpen = () => this.setState({ open: true })
  handleClose = () => this.setState({ open: false })

  render(props) {
    const { open } = this.state.open

    console.log("this.state.blockId : ",this.state.blockId)
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
                // 'PROJECT, OFFICIA DESERUNT ANIM ID EST LABORUM'
            >
                {anim => (
                    <p><Words animate show={anim.entered}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis laboris nisi ut aliquip
                        ex. Duis aute irure. Consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud.
                    </Words></p>
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
    // lineHeight:"0",
    top:"0%",
}

const blockStyle = {
    margin: "5%",
 };
 