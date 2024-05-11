import express, {Express} from "express";
import serverConfig from "./Config/serverConfig";

const app:Express = express(); 

console.log("hello World");
// let s:string = "hello";
// let obj:object = {name: "Pankaj"};

app.listen(serverConfig.PORT, ()=>{
    console.log(`Server started at *:${serverConfig.PORT}`);
});