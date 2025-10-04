import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs"; // Import bcrypt
import NewsModel from "./models/news.js";
import SignupModel from "./models/signup.js";

const app = express();
app.use(cors({
  origin: "http://localhost:3000", // frontend URL
  credentials: true, // if you need cookies/auth
}));
app.use(express.json());
app.use(cors());

app.listen(3002, () => {
    console.log("Server is running on port 3002");
});

app.get("/", (req, res) => {
    res.json({ name: "Saksham" });
});

app.get("/api/getnews", async (req, res) => {
    try {
        const news = await NewsModel.find({});
        res.status(200).json(news);
        console.log("news fetched");
    } catch (error) {
        console.log("error in internal server");
        res.sendStatus(500);
    }
});

app.post("/api/addnews", async (req, res) => {
    try {
        const news = await NewsModel.create(req.body);
        res.status(200).json(news);
        console.log(req.body);
    } catch (error) {
        console.log("error in internal server");
        res.sendStatus(500);
    }
});

app.post("/api/signup", async (req, res) => {
  try {
    const { fname, lname, email, password } = req.body;

    const existing = await SignupModel.findOne({ email });

    if (existing) {
      return res.status(400).json({ success: false, message: 'Email already in use' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    await SignupModel.create({ fname, lname, email, password: hashedPassword });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});


app.post("/api/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await SignupModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "No account found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Incorrect password" });
    }
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});


mongoose
    .connect("mongodb+srv://SakshamPatiyar:news@cluster1.koorw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1")
    .then(() => {
        console.log("Connected to DB");
    });