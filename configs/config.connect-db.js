const mongoose = require('mongoose');

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const cluster = process.env.DB_CLUSTER;
const dbname = process.env.DB_NAME;

const connect = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${username}:${password}@${cluster}.jywl4.mongodb.net/${dbname}?retryWrites=true&w=majority`
    );
    console.log('Mongoose connect to databse successfully 😝');
  } catch (error) {
    console.error('Connect to database error 🤮', error);
  }
};

module.exports = { connect };
