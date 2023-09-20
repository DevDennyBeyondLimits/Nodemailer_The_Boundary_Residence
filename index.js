import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import sendEmail from "./email/sendEmail.js";

const app = express();

app.use(cors("*"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.status(200).json({ message: "server is running" });
});

app.post("/send-email", (req, res) => {
  try {
    console.log(req.body);
    sendEmail(req.body);

    return res.status(201).json({ message: "email was sent successfully" });
  } catch (error) {
    console.log(error);
  }
});

app.listen(5000, () => {
  console.log("SERVER RUNNING AT PORT 5000");
});
