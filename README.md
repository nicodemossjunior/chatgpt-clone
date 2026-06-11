# ChatGPT Clone 🤖

Um clone funcional do ChatGPT desenvolvido com React no frontend e Express.js no backend, integrado com a API OpenAI.

## 📋 Visão Geral

Este projeto é uma aplicação full-stack que replica a interface e funcionalidades básicas do ChatGPT. É uma excelente referência para aprender sobre integração com a OpenAI API, desenvolvimento de chat em tempo real e arquitetura cliente-servidor.

### Características Principais

- ✅ Interface moderna semelhante ao ChatGPT
- ✅ Chat interativo com histórico de mensagens
- ✅ Integração com OpenAI API
- ✅ Menu lateral para gerenciamento de conversas
- ✅ Suporte a CORS para comunicação cliente-servidor
- ✅ Responsivo e amigável ao usuário

## 🏗️ Estrutura do Projeto

```
chatgpt-clone/
├── server/                 # Backend em Node.js/Express
│   ├── src/
│   │   ├── server.js      # Ponto de entrada
│   │   ├── app.js         # Configuração Express
│   │   ├── routes/        # Rotas da API
│   │   ├── controllers/   # Controllers de lógica
│   │   ├── models/        # Modelos de dados
│   │   └── config/        # Configurações
│   └── package.json
│
└── web/                    # Frontend em React
    ├── src/
    │   ├── index.js       # Ponto de entrada React
    │   ├── App.js         # Componente principal
    │   ├── api/           # Funções de API
    │   ├── components/    # Componentes React
    │   ├── styles/        # Folhas de estilo
    │   └── assets/        # Imagens e recursos
    ├── public/
    └── package.json
```

## 🛠️ Stack Tecnológico

### Frontend
- **React 18.3** - Biblioteca UI
- **Axios 1.7** - Cliente HTTP
- **CSS3** - Estilização

### Backend
- **Node.js** - Runtime JavaScript
- **Express 4.19** - Framework web
- **OpenAI API 4.67** - Integração com ChatGPT
- **CORS** - Compartilhamento de recursos entre origens
- **dotenv** - Variáveis de ambiente

## 📦 Subprojetos

Este repositório contém dois subprojetos principais:

### [📱 Frontend (web/)](./web/)
Aplicação React responsável pela interface do usuário.
- [Documentação do Frontend](./web/README.md)

### [🔧 Backend (server/)](./server/)
API Express que conecta o frontend à OpenAI.
- [Documentação do Backend](./server/README.md)

## 🚀 Como Começar

### Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn
- Chave da API OpenAI

### Instalação e Execução

#### 1. Clone o repositório
```bash
git clone https://github.com/nicodemossjunior/chatgpt-clone.git
cd chatgpt-clone
```

#### 2. Configure o Backend

```bash
cd server
npm install

# Crie um arquivo .env
cp .env.example .env

# Adicione suas variáveis de ambiente
# OPENAI_API_KEY=sua_chave_aqui
# PORT=3000

npm start
```

#### 3. Configure o Frontend

Em outro terminal:

```bash
cd web
npm install
npm start
```

O aplicativo estará disponível em `http://localhost:3000`

## 📝 Variáveis de Ambiente

### Backend (.env)
```
OPENAI_API_KEY=sua_chave_da_openai
PORT=3000
```

### Frontend
Por padrão, o frontend chama o backend em `http://localhost:3000`

## 🔌 API Endpoints

### POST `/api/prompt`
Envia um prompt para a OpenAI e retorna a resposta.

**Request:**
```json
{
  "prompt": "Olá, como você está?"
}
```

**Response:**
```json
{
  "data": "Olá! Estou bem, obrigado por perguntar..."
}
```

## 💻 Fluxo de Funcionamento

1. **Usuário digita mensagem** na interface React
2. **Frontend envia requisição** para o backend via Axios
3. **Backend recebe o prompt** e envia para OpenAI API
4. **OpenAI retorna a resposta**
5. **Backend retorna** a resposta ao frontend
6. **Frontend atualiza o chat** com a mensagem do GPT

## 📊 Composição do Código

- **JavaScript**: 49% - Lógica da aplicação
- **CSS**: 34.7% - Estilização e layout
- **HTML**: 16.3% - Estrutura

## 🤝 Como Contribuir

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📋 Melhorias Futuras

- [ ] Autenticação de usuários
- [ ] Persistência de conversas em banco de dados
- [ ] Suporte a diferentes modelos de IA
- [ ] Temas escuro/claro
- [ ] Exportação de conversas
- [ ] Histórico de conversas persistente
- [ ] Melhorias de performance
- [ ] Testes automatizados

## 📄 Licença

Este projeto está licenciado sob a Licença ISC. Veja o arquivo LICENSE para mais detalhes.

## 👨‍💻 Autor

**Nicodemus Souza Junior**
- GitHub: [@nicodemossjunior](https://github.com/nicodemossjunior)

## 📞 Suporte

Para questões e sugestões, abra uma [issue](https://github.com/nicodemossjunior/chatgpt-clone/issues) no GitHub.

## 🔗 Links Úteis

- [Documentação React](https://react.dev)
- [Documentação Express](https://expressjs.com)
- [Documentação OpenAI API](https://platform.openai.com/docs)
- [Guia CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

---

⭐ Se este projeto foi útil para você, considere deixar uma estrela no GitHub!
