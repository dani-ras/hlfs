import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import notes from './routes/api/notes.js'

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors())
app.use(express.json())

// app.use('/notes', notes)
app.post('/goalPosition', (req, res) => {
    const { ballPos, radius } = req.body
    //figure how to get a random point inside a circle with `radius` centered on ballPos
    // const newLocation
    res.send()
})
app.post('/isCloseToGoal', (req, res) => {
    const { ballPos, goalPos, radius } = req.body
    const from = turf.point(ballPos);
    const to = turf.point(goalPos);
    const options = { units: 'kilometers' };
    const distance = turf.distance(from, to, options);
    const isClose = distance < radius
    res.send(isClose)
})

app.get('/', (req, res) => {
    res.send('Daniel\'s Server says hi');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});