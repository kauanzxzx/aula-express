import express from "express";
import validarProduto from "../middlewares/validarProduto.js";

const router = express.Router();

// Dados simulados (arquivo estático em memória)
let produtos = [
  { id: 1, nome: "Notebook", categoria: "eletronico", preco: 4500 },
  { id: 2, nome: "Camiseta", categoria: "vestuario", preco: 80 },
  { id: 3, nome: "Fone de ouvido", categoria: "eletronico", preco: 200 },
];

// 🔹 Listar produtos (com filtro opcional por query string)
router.get("/", (req, res) => {
  const { categoria } = req.query;
  if (categoria) {
    const filtrados = produtos.filter(
      (p) => p.categoria.toLowerCase() === categoria.toLowerCase()
    );
    return res.json(filtrados);
  }
  res.json(produtos);
});

// 🔹 Buscar produto por ID (parâmetro de rota)
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const produto = produtos.find((p) => p.id === parseInt(id));
  if (!produto) {
    return res.status(404).json({ erro: "Produto não encontrado." });
  }
  res.json(produto);
});

// 🔹 Criar novo produto (middleware de rota)
router.post("/", validarProduto, (req, res) => {
  const { nome, categoria, preco } = req.body;
  const novo = {
    id: produtos.length + 1,
    nome,
    categoria,
    preco,
  };
  produtos.push(novo);
  res.status(201).json(novo);
});

// 🔹 Remover produto por ID
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const antes = produtos.length;
  produtos = produtos.filter((p) => p.id !== parseInt(id));

  if (produtos.length === antes) {
    return res.status(404).json({ erro: "Produto não encontrado para remoção." });
  }

  res.json({ mensagem: "Produto removido com sucesso!" });
});

export default router;
