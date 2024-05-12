import express, { Express } from 'express';

import serverConfig from './config/serverConfig';
import apiRouter from './routes';

const app: Express = express();

console.log('hello World');
// let s:string = "hello";
// let obj:object = {name: "Pankaj"};
app.use('/api', apiRouter);

app.listen(serverConfig.PORT, () => {
  console.log(`Server started at *:${serverConfig.PORT}`);
});
