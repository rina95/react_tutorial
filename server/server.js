// const path = require('path');
// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3001;
// const publicPath = path.join(__dirname, '..', 'public');

// app.use(express.static(publicPath));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(publicPath, 'index.html'));
// });

// app.listen(port, () => {
//   console.log(`Server is up on port ${port}!`);
// });

const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);
