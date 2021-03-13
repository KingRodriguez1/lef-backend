import * as express from "express";
import { connect } from "./database/database";
import { createDummyData } from "./skripts/createDummyData";

const app = express();
const port = 8080; // default port to listen

connect();

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});


// define a route handler for the default home page
app.get("/", (req: any, res: any) => {
    res.send("Hello world!");
});

app.get("/dummyData/create", (req: any, res: any) => {
    createDummyData();
});