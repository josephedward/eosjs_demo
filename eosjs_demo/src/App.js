import React, {useState} from 'react';
import Counter from "./Counter"
import logo from './logo.svg';
import './App.css';

// const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });


let currentInfo
//  = useState({});
let currentBlock
//  = useState({});
let currId
// =useState('')


// async function logRpcGetInfo(){ 
//   currentInfo = await rpc.get_info()
//   // .get_block(1) //get the first block
//   console.log(currentInfo.head_block_num)
//   currentBlock = await rpc.get_block(currentInfo.head_block_num)
//   console.log(currentBlock)
//   currId= currentBlock.id
//     }
//     // )();

//     setInterval(logRpcGetInfo, 500)


function App(){


    return(
<div>
<Counter/>
</div>
    )
}

export default App;