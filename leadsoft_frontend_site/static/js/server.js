require('dotenv').config();

const path = require('path');
const express = require('express');
const app = express();

const rootDirectory = path.join(__dirname, '..', '..');

app.get('/', (req, res) => {
  res.sendFile(path.join(rootDirectory, 'index.html'));
});

app.get('/premium.html', (req, res) => {
  res.sendFile(path.join(rootDirectory, 'premium.html'));
});

app.get('/ultra.html', (req, res) => {
  res.sendFile(path.join(rootDirectory, 'ultra.html'));
});

app.use(express.static(path.join(rootDirectory, 'frontend')));

app.get('*', (req, res) => {
  res.sendFile(path.join(rootDirectory, 'index.html'));
});


const PORT = process.env.PORT;
const HOST = process.env.HOST
console.log(HOST, PORT)
app.listen(PORT, HOST, () => {
  console.log(`Server is running on port ${PORT}`);
});
