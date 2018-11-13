const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const httpProxy = require('http-proxy');

const app = express();
const apiProxy = httpProxy.createProxyServer();

const serverRoutes = {
  chart: 'http://ec2-18-223-123-181.us-east-2.compute.amazonaws.com/',
  related: 'http://ec2-35-171-21-23.compute-1.amazonaws.com/',
  purchase: 'http://ec2-54-183-159-221.us-west-1.compute.amazonaws.com/',
  range: 'http://ec2-54-193-31-238.us-west-1.compute.amazonaws.com/',
};

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

app.all('/chart/*', (req, res) => {
  const { chart } = serverRoutes;
  apiProxy.web(req, res, {
    target: chart,
  });
});

app.all('/related/*', (req, res) => {
  const { related } = serverRoutes;
  apiProxy.web(req, res, {
    target: related,
  });
});

app.all('/purchase/*', (req, res) => {
  const { purchase } = serverRoutes;
  apiProxy.web(req, res, {
    target: purchase,
  });
});

app.all('/range/*', (req, res) => {
  const { range } = serverRoutes;
  apiProxy.web(req, res, {
    target: range,
  });
});
