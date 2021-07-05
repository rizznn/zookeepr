// The require() statements will read the index.js files in each of the directories indicated
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const fs = require('fs');
const path = require('path');
const express = require('express');
const { animals } = require('./data/animals');

const PORT = process.env.PORT || 3001;
const app = express();


// Express.js middleware that instructs the server to make certain files readily available and to not gate it behind a server endpoint.
app.use(express.static('public'));

// parse incoming string or array data
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data
// for parsing application/json
app.use(express.json());

// This is our way of telling the server that any time a client navigates to <ourhost>/api, the app will use the router we set up in apiRoutes.
// If / is the endpoint, then the router will serve back our HTML routes.
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});