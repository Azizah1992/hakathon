import express from "express";
// const express = require('express');
import bodyParser from 'body-parser';
// import userRoutes from './routes/users.js';
import axios, * as others from 'axios';





const app = express();
const PORT = 9000;
// const axios = ('axios');



// app.use(bodyParser.json());


// app.use(bodyParser.json());
// app.get('/',(req,res) => {
//     console.log('[TEST]!');
//     res.send('Hello from Homepage');

// });




app.get('/' ,(req,res) => res.send('Hello from Homepage'));

// app.listen(PORT, function(){
    
// let data = JSON.stringify({
//   "query": [
//     {
//       "query": "string",
//       "start": 0,
//       "numResults": 0,
//       "corpusKey": [
//         {
//           "customerId": 0,
//           "corpusId": 0,
//           "semantics": "DEFAULT",
//           "dim": [
//             {
//               "name": "string",
//               "weight": 0
//             }
//           ],
//           "metadataFilter": "string"
//         }
//       ],
//       "rerankingConfig": {
//         "rerankerId": 0
//       }
//     }
//   ]
// });
let data = JSON.stringify({
    "query": [
      {
        "query": "string",
        "start": 0,
        "numResults": 0,
        "corpusKey": [
          {
            "customerId": 0,
            "corpusId": 0,
            "semantics": "DEFAULT",
            "dim": [
              {
                "name": "string",
                "weight": 0
              }
            ],
            "metadataFilter": "string"
          }
        ],
        "rerankingConfig": {
          "rerankerId": 0
        }
      }
    ]
  });

// let config = {
//   method: 'post',
//   url: 'http://experimental.willow.vectara.io/v1/completions',
//   headers: { 
//     'Content-Type': 'application/json', 
//     'Accept': 'application/json', 
//     'customer-id': '3619830699', 
//     'x-api-key': 'zqt_18I7q0OmHrjL2tgk7_tkmLV_bnnde-pjAOQPXA'
//   },
//   data : data
// };

let config = {
    method: 'POST',
    url: 'https://experimental.willow.vectara.io/v1/completions',
    headers: { 
      'Content-Type': 'application/json', 
      'Accept': 'application/json', 
      'customer-id': '3619830699', 
      'x-api-key': 'zqt_18I7q0OmHrjL2tgk7_tkmLV_bnnde-pjAOQPXA'
    },
    data :JSON.stringify({
        "model": "text-davinci-003",
        "prompt": "Say this is a test",
        "max_tokens": 7,
        "temperature": 0
    })
  };

  axios(config)
  .then((response) => {
    console.log("*** data ***");
    console.log(response.data);
  })
  .catch((error) => {
    console.log("*** error ***");
    console.log(error);
  });
console.log(data);


//   fetch('https://experimental.willow.vectara.io/v1/completions', {
//     method: 'POST',
//     headers: { 
//         'Content-Type': 'application/json', 
//         'Accept': 'application/json', 
//         'customer-id': '3619830699', 
//         'x-api-key': 'zqt_18I7q0OmHrjL2tgk7_tkmLV_bnnde-pjAOQPXA'
//       },
//       body:JSON.stringify({
//         "model": "text-davinci-003",
//         "prompt": "Say this is a test",
//         "max_tokens": 7,
//         "temperature": 0
//     }),
//       data:JSON.stringify(data)

//   }).then( res => res.json()).then(data=>console.log(data));

// } 





console.log(`Server Running on port: http://localhost:${PORT}`);

// );








