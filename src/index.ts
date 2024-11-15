import dontenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import routes from './routes/_index';

console.clear()

dontenv.config()

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.use(routes)