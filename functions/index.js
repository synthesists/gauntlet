const functions = require('firebase-functions');
const api = require('./src/app');

exports.api = functions.https.onRequest(api);


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
