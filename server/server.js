const path = require('path');
const publicPath = path.join(__dirname, '../public');
const express = require('express');
const port = process.env.PORT || 3000;

var app = express();

// app.use('/', (req, res) => {
//   res.sendFile(publicPath + '/index.html')
// });
app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Started up on port ${port}`);
});

module.exports = app;
