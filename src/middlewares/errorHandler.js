export default function errorHandler(err, req, res, next) {
  console.error("❌ Erro capturado pelo middleware:", err.message);
  res.status(500).json({
    erro: "Erro interno do servidor.",
    detalhes: err.message,
  });
}
