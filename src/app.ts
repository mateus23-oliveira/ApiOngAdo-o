import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    mensagem: "OngAdocaoAPI funcionando!",
  });
});


app.use("/auth", authRoutes);

app.use("/usuarios", userRoutes);

export default app;