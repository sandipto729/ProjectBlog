// Correct import statement in Login.js
import express from "express";
import userSchema from "./LoginUserSchema.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/", async (req, res) => {
    const { username, password } = req.body;

    try {
        const findUser = await userSchema.findOne({ username });
        if (findUser) {
            const isMatch = await bcrypt.compare(password, findUser.password);
            if (isMatch) {
                const { username, name, dob, company, phone, email, markssheet } = findUser;
                res.json({ username, name, dob, company, phone, email, markssheet });
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

export default router;
