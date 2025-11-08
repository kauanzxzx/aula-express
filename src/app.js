import express from "express";
import produtosRouter from "./routes/produtos.js";
import logMiddleware from "./middlewares/logMiddleware.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
app.use(express.json());

// 🔹 Middleware Global (log)
app.use(logMiddleware);

// 🔹 Rota de saúde (teste de funcionamento)
app.get("/api/health", (req, res) => {
  res.json({ status: "Servidor rodando corretamente ✅" });
});

// 🔹 Rotas da entidade principal
app.use("/api/produtos", produtosRouter);

// 🔹 Middleware de Erro (final)
app.use(errorHandler);

// 🔹 Inicialização
const PORT = 3000;
app.listen(PORT, () =>
  console.log(`✅ Servidor rodando em http://localhost:${PORT}/api`)
);
