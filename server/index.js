const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const Habits = require('./sampleData.js');

app.use(express.static(path.join(__dirname, '/../client/dist')))

app.use(express.json());

app.get('/api/habits', (req, res) => {
  res.send(Habits);
});

app.listen(port, () => {
  console.log(`server listening at port ${port}`)
})