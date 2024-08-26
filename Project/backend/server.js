import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Login from './LoginSchema/Login.js'; // Correct path to your router

const app = express();
const Port = 3000;

app.use(express.json());
app.use(cors());

// Use the Login router
app.use('/login', Login);

mongoose.connect('mongodb://localhost:27017/blog_page', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once('open', () => {
    console.log("Connected to MongoDB");
});

db.on('error', (error) => {
    console.error(error);
});

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});
