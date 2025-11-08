# Projeto: Produtos - Express (Entrega)
**Aluno:** Kauan Oziel Claudino

## Descritivo rápido
Projeto de exemplo em Node.js usando Express para gerenciar uma entidade `produtos`.
Implementa rotas REST, parâmetros de rota, query strings e três tipos de middlewares.

## Como rodar
1. Extrair o zip.
2. `cd` para a pasta do projeto.
3. Instalar dependências:
```bash
npm install
```
4. Rodar:
```bash
npm start
```
A API ficará disponível em `http://localhost:3000`.

## Rotas
- `GET /produtos` — lista produtos. Suporta query strings:
  - `?categoria=Roupas`
  - `?maxPreco=100`
- `GET /produtos/:id` — busca produto por id (parâmetro de rota).
- `POST /produtos` — cria produto. Body JSON: `{ "nome": "...", "preco": 10.5, "categoria": "..." }`
- `DELETE /produtos/:id` — remove produto por id.

## Conceitos (breve)
- **Roteamento modular:** usamos `express.Router()` em `routes/produtos.js`. Rotas em `app.js` são globais; Router permite modularizar e montar em paths.
- **Parâmetros de rota:** partes da URL definidas com `:id`. Lidos em `req.params`.
- **Query strings:** pares `?chave=valor` na URL. Lidos em `req.query`. Usadas para filtros (ex.: `?categoria=Calçados`).
- **Middlewares:**
  - *Global:* `globalLogger` (em `middlewares.js`) é executado em todas as requisições.
  - *De rota:* validações com `express-validator` e `routeValidator`.
  - *De erro:* `errorHandler` captura erros e responde centralizadamente.

## Evidências / exemplos (curl)
Listar:
```bash
curl http://localhost:3000/produtos
```
Filtrar:
```bash
curl "http://localhost:3000/produtos?categoria=Roupas"
```
Criar:
```bash
curl -X POST -H "Content-Type: application/json" -d '{"nome":"Boné","preco":29.9,"categoria":"Acessórios"}' http://localhost:3000/produtos
```
Buscar:
```bash
curl http://localhost:3000/produtos/<id>
```
Remover:
```bash
curl -X DELETE http://localhost:3000/produtos/<id>
```

## Observações
- Dados são mantidos em memória (array). Para produção, usar banco de dados.
- Arquivos principais: `app.js`, `routes/produtos.js`, `middlewares.js`.
