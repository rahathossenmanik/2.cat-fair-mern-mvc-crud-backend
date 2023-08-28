require('dotenv').config({ path: '.env' });
const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const petTypes = require('./routes/petTypeRoutes');
const characters = require('./routes/characterRoutes');
const pets = require('./routes/petRoutes');

const port = process.env.PORT;
const mongo_uri = process.env.DATABASE_URL;
const app = express();

try {
  mongoose.connect(mongo_uri, {
    useNewUrlParser: true,
    useFindAndModify: false
  });
  console.log(`Connected to Database: ${mongo_uri}`);
} catch (error) {
  console.log(`Database Connection Error: ${err}`);
  process.exit();
}

app.use(express.json());
app.use('/petTypes', petTypes);
app.use('/characters', characters);
app.use('/pets', pets);
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen({ port }, () => {
  console.log(`Server is Running on: http://localhost:${port}`);
});
