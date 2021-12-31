import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import posts from "./routers/posts.js";
import Logins from './routers/Logins.js'
import Users from './routers/Users.js'
import Projects from './routers/Projects.js'
import Info from './routers/Info.js'
import Teams from './routers/Teams.js'

const app = express();
const PORT = process.env.port || 5000;
const URI =
  "mongodb+srv://admin:RyFdDUBNStbPjKAN@cluster0.1l1mg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(cors());
app.use(bodyParser.json({limit: "30mb"}));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));


app.use("/posts", posts);
app.use("/Login", Logins); 
app.use("/Users", Users);
app.use("/Projects", Projects);
app.use("/Info", Info);
app.use("/Teams", Teams);

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
