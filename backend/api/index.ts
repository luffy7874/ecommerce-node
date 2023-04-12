import * as http from 'http';
import app from './app';

const server = http.createServer(app);

const {API_PORT} = process.env;

const port = process.env.PORT || API_PORT;

server.listen(port, ():void => {
    console.log(`server started at http://127.0.0.1:${port}`);
});