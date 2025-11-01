import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();
const upload = multer();

app.use(cors());

app.post("/api/omk/process", upload.fields([{ name:"beat" }, { name:"vocal" }]), (req, res) => {
  const vocal = req.files?.vocal?.[0];
  if (!vocal) return res.status(400).send("No vocal file");

  // send vocal back now — AI coming next step
  res.set("Content-Type","audio/webm");
  res.send(vocal.buffer);
});

app.listen(3000, () => console.log("Backend live at http://localhost:3000"));