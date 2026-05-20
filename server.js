/* eslint-disable no-console */
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

mongoose.set('bufferCommands', false);

const app = require('./app');

const db = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

let cached = global.mongoose;

if (!cached) {
  global.mongoose = { conn: null, promise: null };
  cached = global.mongoose;
}

async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(db).then((mongooseConnection) => {
      console.log('DB connection successful!');
      return mongooseConnection;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

connectDB().catch((err) => {
  console.log('DB connection error:', err);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`port: ${port}`);
});
