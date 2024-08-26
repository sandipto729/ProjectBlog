import express from 'express';
import mongoose from 'mongoose';
import userSchema from './LoginSchema/LoginUserSchema.js';
import cors from 'cors';
import bcrypt from 'bcrypt';

const app = express();
const Port = 3000;

mongoose.connect('mongodb://localhost:27017/blog_page', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once('open', () => {
    console.log("Connected to MongoDB");
});

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    
    try {
        const findUser = await userSchema.findOne({ username });
        if (findUser) {
            const isMatch = await bcrypt.compare(password, findUser.password);
            if (isMatch) {
                
                const {username,name,dob,company,phone,email,markssheet} = findUser
                res.json({ username,name,dob,company,phone,email ,markssheet}); 

            } else {
                res.status(401).send("Wrong Password");
            }
        } else {
            res.status(404).send("User not found");
        }
    } catch (err) {
        res.status(500).send("Server Error");
    }
});

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});
