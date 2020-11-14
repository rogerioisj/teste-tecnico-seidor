import express from 'express';
import router from './routes/routes';
import bodyParser from 'body-parser';


const app = express();

const port = 3000;

app.use(bodyParser.json());

app.use('/api', router);

app.listen(port, () =>{
    console.log("Server is running on port " + port);
});