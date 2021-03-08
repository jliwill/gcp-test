'use strict';

exports.http = (request, response) => {
  response.status(200).send('Hello World!');
};

exports.event = (event, callback) => {
  callback();
};

"use strict";

// /**
//  * Responds to any HTTP request.
//  *
//  * @param {!express:Request} req HTTP request context.
//  * @param {!express:Response} res HTTP response context.
//  */
// exports.handler = (req, res) => {

//     try {

//         res.set('Access-Control-Allow-Origin', '*');

//         if (req.method === 'OPTIONS') {
//             // Send response to OPTIONS requests
//             res.set('Access-Control-Allow-Methods', 'POST,GET,DELETE,PUT');
//             res.set('Access-Control-Allow-Headers', 'Content-Type');
//             res.set('Access-Control-Max-Age', '3600');
//             //test comment
//             res.status(204).send('');
//         } else {

//             if (req.method === 'POST' && req.path === '/signin') {
//                 res.send(JSON.stringify({ message : 'This will be implemented soon'}));
//             }
//             else {
//                 console.warn('not implemented route called', req.method, req.path);
//                 res.status(501).send('');
//             }
//         }
//     }
//     catch (err) {
//         console.error(err);
//         res.status(500).send(err.toString());
//     }
// };