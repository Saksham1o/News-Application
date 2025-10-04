import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs"; 
const app = express();
import NewsModel from "./models/news.js";
import SignupModel from "./models/signup.js";

app.use(express.json());
app.use(cors());

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});

app.get("/", (req, res) => {
  res.json({ name: "Saksham" });
});

app.post("/api/addnews", async (req, res) => {
  try {
    const news = await NewsModel.create(req.body);
    res.status(200).json(news);
    console.log(req.body);
  } catch (error) {
    console.error("Error in adding news:", error);
    res.sendStatus(500);
  }
});

app.post("/api/signup", async (req, res) => {
  try {
    const { fname, lname, email, password } = req.body;

    const salt = await bcrypt.genSalt(10); 
    const hashedPassword = await bcrypt.hash(password, salt); 

    const signup = await SignupModel.create({
      fname,
      lname,
      email,
      password: hashedPassword, 
    });
    res.status(200).json(signup);
    console.log(req.body);
  } catch (error) {
    console.error("Error in signup:", error);
    res.sendStatus(500);
  }
});

app.post("/api/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await SignupModel.findOne({ email: email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password); // Compare hashed passwords
      if (isMatch) {
        console.log("Sign-in successful");
        res.json({ success: true });
      } else {
        console.log("Password Incorrect");
        res.json({ success: false, message: "Password Incorrect" });
      }
    } else {
      console.log("No Record Found");
      res.json({ success: false, message: "No Record Found" });
    }
    console.log(req.body);
  } catch (error) {
    console.error("Error in signin:", error);
    res.sendStatus(500);
  }
});

mongoose
  .connect("mongodb+srv://SakshamPatiyar:news@cluster1.koorw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1")
  .then(() => {
    console.log("Connected to DB");
  });

export default SignupModel;