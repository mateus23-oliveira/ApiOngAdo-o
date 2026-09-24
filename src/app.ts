import express from "express";
import cors from "cors";
import path from "path";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";
import animalRoutes from "./routes/animalRoutes"; 
import formularioRoutes from "./routes/formularioRoutes"

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

app.use("/animais", animalRoutes);

app.use("/formularios", formularioRoutes);


app.use(
  "/uploads",
  express.static(path.resolve("uploads"))
);

export default app;