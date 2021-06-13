import express from "express";
import { join } from "path";
const app = express();

app.get("/*", (req, res) => {
  res.sendFile(join(__dirname, "build", "index.html"));
});
