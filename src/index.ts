import express, { json, Request, Response } from "express";
import router from "./routes";
import connectDB from "./database";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

connectDB();

const allowedOrigins = ["https://mdw-app.vercel.app"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(json());
app.use(router);

app.get("/", (req, res) => {
  res.send("Backend funcionando! 🚀");
});

app.use((req: Request, res: Response) => {
  res.status(404).send("Route not found");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
