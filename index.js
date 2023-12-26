import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './usersRoutes.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/users', usersRoutes);

const isWorking = (req, res) => {
    res.send('Hello, World');
}

app.get('/', isWorking);
app.listen(PORT, () => {

    console.log(`Server running on port: http://localhost:${PORT}`);
});