"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const jobsRoutes_1 = require("./routes/api/jobsRoutes");
const bodyParser = require('body-parser');
const cors = require('cors');
const server = express();
// const port = 8080;
const port = 9000;
server.use(cors());
server.use(bodyParser.json());
server.use('/api/jobs', jobsRoutes_1.default);
// server.use('*', (req, res, next) => {
//   console.log('HERE');
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   // res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json,Authorization'
//   );
//   next();
// });
server.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
