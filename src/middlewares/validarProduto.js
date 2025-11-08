export default function validarProduto(req, res, next) {
  const { nome, categoria, preco } = req.body;

  if (!nome || !categoria || !preco) {
    return res
      .status(400)
      .json({ erro: "Todos os campos (nome, categoria, preco) são obrigatórios." });
  }

  if (typeof preco !== "number" || preco <= 0) {
    return res
      .status(400)
      .json({ erro: "O campo preco deve ser um número positivo." });
  }

  next();
}
