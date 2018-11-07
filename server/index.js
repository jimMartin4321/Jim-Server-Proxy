const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');
const Bluebird = require('bluebird');

fetch.Promise = Bluebird;

const app = express();

app.use(express.static(path.join(__dirname, '../client/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());

const port = 8080;

app.listen(port, (err) => {
  if (err) {
    return console.log(`error connection to port ${port}`);
  }
  return console.log(`listening at port ${port}`);
});

app.get('/companiesJim/:companyId', (req, res) => {
  const id = req.params.companyId;
  fetch(`http://localhost:3004/companies/${id}`)
    .then(res => res.json())
    .then(data => res.json(data));
});

app.get('/stocks/:companyId', (req, res) => {
  const id = req.params.companyId;
  fetch(`http://localhost:3004/stocks/${id}`)
    .then(res =>  res.json())
    .then(data => res.json(data));
});

app.get('/company/:companyId', (req, res) => {
  const id = req.params.companyId;
  fetch(`http://localhost:3002/company/${id}`)
    .then(res => res.json())
    .then(data => res.json(data));
  }
);

app.get('/companies/:companyId', (req, res) => {
  const id = req.params.companyId;
  fetch(`http://localhost:3001/companies/${id}`)
    .then(res => res.json())
    .then(data => res.json(data));
});

app.get('/companiesKatie/:companyId', (req, res) => {
  const id = req.params.companyId;
  fetch(`http://localhost:3009/companies/${id}`)
    .then(res => res.json())
    .then(data => res.json(data));
});
