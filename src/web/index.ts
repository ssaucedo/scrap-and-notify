import express from 'express';
import env from 'dotenv';
import { Engine } from '../engine';

env.config();

const app = express();
app.use(express.json());

app.post('/execute', async (req, res) => {
    try {
        Engine.provide();
        res.status(200);
        res.send();
    } catch(e) {
        res.send(500);
    }
})

app.listen(3000);