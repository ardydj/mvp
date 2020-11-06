const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, '/../client/dist')))

app.use(express.json());

app.get('/api/habits', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`server listening at port ${port}`)
})