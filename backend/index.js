//import express
import express from "express";

//import dotenv ES6 type module style
import {} from 'dotenv/config' 

//import cors
import cors from "cors";

//import routes
import router from "./routes/routes.js";

//init express
const app = express();

//use express json
app.use(express.json());

//use cors
app.use(cors());

//use router
app.use(router);

//PORT
app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running on PORT: ", process.env.APP_PORT);
});