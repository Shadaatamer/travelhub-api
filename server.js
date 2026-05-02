/* eslint-disable no-console */
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

const db = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);
mongoose.connect(db).then(() => {
  console.log('connection is successful');
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`port : ${port}`);
});
