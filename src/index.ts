import dontenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import routes from "./routes/_index"

console.clear()

dontenv.config()

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`)
})

app.use(routes)