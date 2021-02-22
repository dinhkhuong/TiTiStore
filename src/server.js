//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
// app.use(express.static('./dist/titistore'));
app.use(express.static(__dirname + 'dist/titistore'));

app.get('/*', (req, res) =>
    //res.sendFile('index.html', {root: 'dist/titistore/'}),
    res.sendFile(path.join(__dirname + 'dist/titistore/index.html')),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

console.log('console listening!');