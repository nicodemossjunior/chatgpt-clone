# 🔧 Backend - ChatGPT Clone

API REST em Express.js que integra a OpenAI API e fornece endpoints para o frontend.

## 📋 Visão Geral

O backend é responsável por:
- Receber requisições do frontend
- Comunicar com a OpenAI API
- Processar e retornar respostas
- Gerenciar variáveis de ambiente e configurações

## 🏗️ Estrutura de Diretórios

```
server/
├── src/
│   ├── server.js           # Ponto de entrada da aplicação
│   ├── app.js              # Configuração do Express
│   ├── routes/
│   │   └── routes.js       # Definição de rotas
│   ├── controllers/        # Lógica de negócio
│   │   └── prompt-controller.js
│   ├── models/             # Modelos de dados (placeholder)
│   └── config/             # Configurações (placeholder)
├── .env                    # Variáveis de ambiente (não commitado)
├── .env.example            # Exemplo de variáveis de ambiente
├── .gitignore              # Arquivos ignorados pelo Git
├── package.json            # Dependências e scripts
└── README.md               # Este arquivo
```

## 🚀 Instalação

### Pré-requisitos
- Node.js v14 ou superior
- npm ou yarn
- Chave de API da OpenAI

### Passos de Instalação

1. **Acesse o diretório do servidor**
```bash
cd server
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
# Crie um arquivo .env baseado no .env.example
cp .env.example .env

# Edite o arquivo .env com suas credenciais
nano .env
```

4. **Inicie o servidor**
```bash
npm start
```

O servidor estará rodando em `http://localhost:3000` (ou a porta definida em .env)

## 📦 Dependências

```json
{
  "cors": "^2.8.5",        // Habilita CORS
  "dotenv": "^16.4.5",     // Carrega variáveis de ambiente
  "express": "^4.19.2",    // Framework web
  "openai": "^4.67.3"      // Cliente da OpenAI
}
```

## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Chave da API OpenAI
OPENAI_API_KEY=sua_chave_aqui

# Porta do servidor
PORT=3000

# Modelo a usar (opcional)
OPENAI_MODEL=gpt-3.5-turbo
```

### Obtendo a Chave de API

1. Acesse [OpenAI Platform](https://platform.openai.com/api-keys)
2. Crie uma nova chave de API
3. Copie e adicione à variável `OPENAI_API_KEY` no `.env`

## 📡 Endpoints da API

### POST `/api/prompt`

Envia um prompt e retorna a resposta da OpenAI.

**Request:**
```bash
curl -X POST http://localhost:3000/api/prompt \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Olá, como você está?"}'
```

**Body:**
```json
{
  "prompt": "Sua pergunta aqui"
}
```

**Response (Success - 200):**
```json
{
  "data": "Resposta da OpenAI aqui..."
}
```

**Response (Error - 400/500):**
```json
{
  "error": "Mensagem de erro"
}
```

## 📝 Estrutura dos Arquivos Principais

### `server.js`
Ponto de entrada da aplicação. Inicia o servidor Express.

```javascript
const app = require("./app")
const port = process.env.PORT // 3000

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})
```

### `app.js`
Configuração do Express com middleware.

```javascript
const express = require("express")
const cors = require("cors")
const routes = require("./routes/routes")

require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

module.exports = app
```

### `routes/routes.js`
Define todas as rotas da API.

```javascript
const express = require("express")
const promptController = require("../controllers/prompt-controller")

const routes = express.Router()

routes.post('/api/prompt', promptController.sendText)

module.exports = routes
```

### `controllers/prompt-controller.js`
Contém a lógica para processar prompts e comunicar com OpenAI.

Exemplo esperado:
```javascript
const { OpenAI } = require("openai");

const sendText = async (req, res) => {
  try {
    const { prompt } = req.body;
    
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    res.json({ data: response.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { sendText };
```

## 🔄 Fluxo de Requisição

```
Frontend (Axios)
       ↓
POST /api/prompt
       ↓
routes/routes.js
       ↓
controllers/prompt-controller.js
       ↓
OpenAI API
       ↓
Resposta retorna ao Frontend
```

## 🔐 Boas Práticas de Segurança

### ✅ Faça:
- Nunca commithe o arquivo `.env` (add ao `.gitignore`)
- Use variáveis de ambiente para dados sensíveis
- Valide inputs do cliente
- Implemente rate limiting em produção
- Use HTTPS em produção
- Mantenha dependências atualizadas

### ❌ Não Faça:
- Expor chaves de API no código
- Fazer commit de `.env`
- Confiar cegamente em dados do cliente
- Usar a chave de API em variáveis globais sem proteção

## 🛠️ Scripts Disponíveis

```bash
# Iniciar o servidor com reload automático
npm start

# Executar sem reload automático
node src/server.js

# Executar testes (quando configurado)
npm test

# Verificar dependências
npm list
```

## 🐛 Troubleshooting

### Erro: "Cannot find module 'express'"
```bash
npm install
```

### Erro: "OPENAI_API_KEY não definida"
- Verifique se o arquivo `.env` existe
- Verifique se a chave está definida corretamente
- Reinicie o servidor após editar `.env`

### Erro: "CORS error"
- Verifique se o CORS está habilitado em `app.js`
- Verifique se o frontend está usando a porta correta

### Erro: "OpenAI API error"
- Verifique se a chave da API é válida
- Verifique se você tem créditos na conta OpenAI
- Verifique se o modelo especificado está disponível

## 📊 Performance

### Melhorias Futuras:
- [ ] Implementar cache de respostas
- [ ] Rate limiting por IP
- [ ] Pool de conexões de banco de dados
- [ ] Logging centralizado
- [ ] Monitoramento de performance
- [ ] Testes unitários e de integração

## 📚 Recursos Adicionais

- [Documentação Express](https://expressjs.com)
- [Documentação OpenAI](https://platform.openai.com/docs)
- [Node.js Best Practices](https://nodejs.org/en/docs/)
- [CORS Explained](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

## 🤝 Contribuindo

Para contribuir com melhorias no backend:

1. Crie uma branch para sua feature
2. Implemente a funcionalidade
3. Teste adequadamente
4. Faça um Pull Request

## 📝 Changelog

### v1.0.0
- ✅ Setup inicial do Express
- ✅ Integração com OpenAI API
- ✅ Endpoint POST /api/prompt
- ✅ Suporte a CORS

## 📄 Licença

ISC

## 👨‍💻 Autor

**Nicodemus Souza Junior** - [@nicodemossjunior](https://github.com/nicodemossjunior)

---

⭐ Gostou? Deixe uma estrela no GitHub!
