import express from "express";
import usersroutes from "./routes/users.routes.js";
import dbconnection from "./datamongo/mongo.js";

const app = express();
app.use(usersroutes);

dbconnection().then(()=>console.log("Conexión establecida"))

app.listen(3000, () => {
  console.log("servidor run en el puerto 3mil");
});
