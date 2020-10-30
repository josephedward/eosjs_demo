/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

const { JsonRpc } = require("eosjs");
const fetch = require("node-fetch"); // node only; not needed in browsers
const { typeOf } = require("react-is");
let endPointUrl = "https://api.eosdetroit.io:443";
let headBlockNumber;

describe("api testing", () => {
  const rpc = new JsonRpc(endPointUrl, { fetch });

  it("tests the get_info API method to obtain current chain information", async () => {
    // let currentInfo =
    await rpc.get_info().then((response) => {
      try {
        expect(response).to.have.property("block_cpu_limit", 200000);
        expect(response).to.have.property("server_version");
        expect(response).to.have.property("chain_id");
        expect(response).to.have.property("head_block_num");
        headBlockNumber = response.head_block_num;
        expect(response).to.have.property("last_irreversible_block_num");
        expect(response).to.have.property("last_irreversible_block_id");
        expect(response).to.have.property("head_block_id");
        expect(response).to.have.property("head_block_time");
        expect(response).to.have.property("head_block_producer");
        expect(response).to.have.property("virtual_block_cpu_limit");
        expect(response).to.have.property("virtual_block_net_limit");
        expect(response).to.have.property("server_version_string");
        expect(response).to.have.property("block_net_limit");
        expect(response).to.have.property("fork_db_head_block_num");
        expect(response).to.have.property("fork_db_head_block_id");
        expect(response).to.have.property("server_full_version_string");
      } catch (err) {
        console.log("testing error : ", err);
      }
    });
  });

  it("verifies 1st block information", async () => {
    await rpc.get_block(1).then((response) => {
      try {
        expect(response).to.have.property(
          "timestamp",
          "2018-06-08T08:08:08.500"
        );
        expect(response).to.have.property("producer", "");
        expect(response).to.have.property("confirmed", 1);
        expect(response).to.have.property(
          "previous",
          "0000000000000000000000000000000000000000000000000000000000000000"
        );
        expect(response).to.have.property(
          "transaction_mroot",
          "0000000000000000000000000000000000000000000000000000000000000000"
        );
        expect(response).to.have.property(
          "action_mroot",
          "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"
        );
        expect(response).to.have.property("schedule_version", 0);
        expect(response).to.have.property("new_producers", null);
        expect(response).to.have.property(
          "producer_signature",
          "SIG_K1_111111111111111111111111111111111111111111111111111111111111111116uk5ne"
        );
        expect(response).to.have.property("transactions");
        expect(response).to.have.property(
          "id",
          "00000001405147477ab2f5f51cda427b638191c66d2c59aa392d5c2c98076cb0"
        );
        expect(response).to.have.property("block_num", 1);
        expect(response).to.have.property("ref_block_prefix", 4126519930);
        checkTransactionProperties(response.transactions);
      } catch (err) {
        console.log("testing error : ", err);
      }
    });
  });

  it("tests most recent block", async () => {
    // console.log(headBlockNumber)
    await rpc.get_block(headBlockNumber).then((response) => {
      try {
        expect(response).to.have.property("timestamp");
        expect(response).to.have.property("producer");
        expect(response).to.have.property("confirmed");
        expect(response).to.have.property("previous");
        expect(response).to.have.property("transaction_mroot");
        expect(response).to.have.property("action_mroot");
        expect(response).to.have.property("schedule_version");
        expect(response).to.have.property("new_producers");
        expect(response).to.have.property("producer_signature");
        expect(response).to.have.property("transactions");
        expect(response).to.have.property("id");
        expect(response).to.have.property("block_num", headBlockNumber);
        expect(response).to.have.property("ref_block_prefix");
        checkTransactionProperties(response.transactions);
      } catch (err) {
        console.log("testing error : ", err);
      }
    });
  });
});

function checkTransactionProperties(transactionList) {
  for (let x of transactionList) {
    try {
      console.log(x);
      expect(x).to.have.property("cpu_usage_us");
      expect(x).to.have.property("net_usage_words");
      expect(x).to.have.property("status");
      expect(x).to.have.property("trx");
      if (x.trx) {
        expect(x.trx).to.have.property("compression");
        expect(x.trx).to.have.property("context_free_data");
        expect(x.trx).to.have.property("id");
        expect(x.trx).to.have.property("packed_context_free_data");
        expect(x.trx).to.have.property("packed_trx");
        expect(x.trx).to.have.property("signatures");
        expect(x.trx).to.have.property("transaction");
        if (x.trx.transaction) {
          expect(x.trx.transaction).to.have.property("actions");
          expect(x.trx.transaction).to.have.property("context_free_actions");
          expect(x.trx.transaction).to.have.property("delay_sec");
          expect(x.trx.transaction).to.have.property("expiration");
          expect(x.trx.transaction).to.have.property("max_cpu_usage_ms");
          expect(x.trx.transaction).to.have.property("max_net_usage_words");
          expect(x.trx.transaction).to.have.property("ref_block_num");
          expect(x.trx.transaction).to.have.property("ref_block_prefix");
        }
      }
    } catch (err) {
      console.log("testing error : ", err);
    }
  }
}

/*
actions: [{…}]
context_free_actions: []
delay_sec: 0
expiration: "2020-10-30T08:44:45"
max_cpu_usage_ms: 0
max_net_usage_words: 0
ref_block_num: 49528
ref_block_prefix:
*/

// cpu_usage_us: 8597
// net_usage_words: 12
// status: "executed"
// trx

// compression: "none"
// context_free_data: []
// id: "98bc00b8bcd4d22639bc84917f9b72f547f32f82c1ef56c9b74bdd4b0f6b0c15"
// packed_context_free_data: ""
// packed_trx: "10c59b5fbfb0f3b303410000000001a02e454aba9c55ed000000572d3ccdcd01a0a662fe4e96866900000000a8ed323233a0a662fe4e9686699027aa8663ec964a6444b7b4280000000854494d4500000012737761703a3533303a373136313330323a3500"
// signatures: ["SIG_K1_Jy5xNCGvJyqMFQt9BAJbpeB7n969jGDqUBmXwQgHufN…EqRN1JxL5abDAds4BWyoYKs124sVpGyMnWhDQHqLA4s8nwbjE"]
// transaction:

// {
//   timestamp: "2018-06-08T08:08:08.500",
//   producer: "",
//   confirmed: 1,
//   previous: "0000000000000000000000000000000000000000000000000000000000000000",
//   transaction_mroot:
//     "0000000000000000000000000000000000000000000000000000000000000000",
//   action_mroot:
//     "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
//   schedule_version: 0,
//   new_producers: null,
//   producer_signature:
//     "SIG_K1_111111111111111111111111111111111111111111111111111111111111111116uk5ne",
//   transactions: [],
//   id: "00000001405147477ab2f5f51cda427b638191c66d2c59aa392d5c2c98076cb0",
//   block_num: 1,
//   ref_block_prefix: 4126519930,
// };

/** 
  {
    "server_version": "c173d52d",
    "chain_id": "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
    "head_block_num": 149062540,
    "last_irreversible_block_num": 149062210,
    "last_irreversible_block_id": "08e2824287af4bc085985c3d162a6e34663997de9c0509d9defbd31afa2bd5df",
    "head_block_id": "08e2838c5158ec539e2bf75b14c8df622779759939d10c671e15b10a4b0314eb",
    "head_block_time": "2020-10-26T01:51:56.500",
    "head_block_producer": "helloeoscnbp",
    "virtual_block_cpu_limit": 200000,
    "virtual_block_net_limit": 1048576000,
    "block_cpu_limit": 200000,
    "block_net_limit": 1048576,
    "server_version_string": "v2.0.6",
    "fork_db_head_block_num": 149062540,
    "fork_db_head_block_id": "08e2838c5158ec539e2bf75b14c8df622779759939d10c671e15b10a4b0314eb",
    "server_full_version_string": "v2.0.6-2281ba064ffa5de0efbe492a2fbf8e4249eda508-dirty"
}

 * 
*/
