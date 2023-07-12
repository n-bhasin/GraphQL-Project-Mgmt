const express = require("express");
const colors = require("colors");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const schema = require("./schema/schema");
const connectDb = require("./config/db");

const PORT = process.env.PORT || 4000;

const app = express();

//connect to db
connectDb();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);
app.listen(PORT, console.log(`Server listening on ${PORT}`));
