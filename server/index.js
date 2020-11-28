const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const cors = require('cors');
const Habits = require('./sampleData.js');
const compression = require('compression');

app.use(express.static(path.join(__dirname, '/../client/dist')))
app.use(cors());
app.use(express.json());
app.use(compression());

app.get('/api/habits', (req, res) => {
  res.send(Habits);
});

app.listen(port, () => {
  console.log(`server listening at port ${port}`)
})