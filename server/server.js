//require express to run our server/send data
//------similar to imports in React
const express = require('express');
const cors = require('cors')
const apiRouter = require('./routes');
const app = express();

app.use(cors())

//parses incoming requests to json
app.use(express.json());


//since server.js is entry point, this line tells the computer
//that we want to use functionality in the "index.js" of the routes
//folder when user goes to 'localhost:3000/api'
app.use('/api', apiRouter);

app.listen(3000, () => console.log('App listening on port 3000'))