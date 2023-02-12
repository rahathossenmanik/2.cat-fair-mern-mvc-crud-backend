const express = require('express');
const mongoose = require('mongoose');

const authors = require('./routes/authors');
const books = require('./routes/books');

const port = 5000;
const mongo_uri = 'mongodb://localhost:27017/mern-mvc-crud';
const app = express();

try {
  mongoose.connect(mongo_uri, {
    useNewUrlParser: true,
    useFindAndModify: false,
  });
  console.log(`Connected to Database: ${mongo_uri}`);
} catch (error) {
  console.log(`Database Connection Error: ${err}`);
  process.exit();
}

app.use(express.json());
app.use('/api/authors', authors);
app.use('/api/books', books);

app.listen({ port }, () => {
  console.log(`Server is Running on: http://localhost:${port}`);
});
