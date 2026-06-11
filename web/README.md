# 📱 Frontend - ChatGPT Clone

Interface React moderna e responsiva para o ChatGPT Clone.

## 📋 Visão Geral

O frontend é uma aplicação React que fornece:
- Interface de chat interativa
- Menu lateral para gerenciamento de conversas
- Componentes reutilizáveis
- Integração com API backend
- Design responsivo

## 🏗️ Estrutura de Diretórios

```
web/
├── public/                 # Arquivos estáticos
│   ├── index.html         # Arquivo HTML principal
│   ├── favicon.ico        # Ícone do site
│   └── manifest.json      # Manifest do PWA
│
├── src/                   # Código fonte
│   ├── index.js           # Ponto de entrada React
│   ├── App.js             # Componente raiz
│   ├── api/               # Funções de API
│   │   └── api.js         # Cliente Axios
│   ├── components/        # Componentes React
│   │   ├── ChatMessage/   # Componente de mensagem
│   │   │   └── ChatMessage.js
│   │   └── SideMenu/      # Menu lateral
│   │       └── SideMenu.js
│   ├── styles/            # Folhas de estilo
│   │   ├── index.css      # Estilos globais
│   │   ├── App.css        # Estilos do App
│   │   └── reset.css      # Reset CSS
│   └── assets/            # Imagens e recursos
│
├── .env.local             # Variáveis de ambiente local
├── package.json           # Dependências e scripts
└── README.md              # Este arquivo
```

## 🚀 Instalação

### Pré-requisitos
- Node.js v14 ou superior
- npm ou yarn

### Passos de Instalação

1. **Acesse o diretório do frontend**
```bash
cd web
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente (opcional)**
```bash
# Crie um arquivo .env.local
echo "REACT_APP_API_URL=http://localhost:3000" > .env.local
```

4. **Inicie o servidor de desenvolvimento**
```bash
npm start
```

A aplicação estará disponível em `http://localhost:3000`

## 📦 Dependências

```json
{
  "react": "^18.3.1",              // Biblioteca UI
  "react-dom": "^18.3.1",          // Renderização DOM
  "react-scripts": "5.0.1",        // Scripts de build
  "axios": "^1.7.7",               // Cliente HTTP
  "@testing-library/react": "^13.4.0",  // Testes
  "@testing-library/jest-dom": "^5.17.0" // Matchers de teste
}
```

## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# URL da API backend
REACT_APP_API_URL=http://localhost:3000
```

## 📡 Integração com API

### Cliente API (`src/api/api.js`)

```javascript
import axios from 'axios';

export const makeRequest = async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/api/prompt`,
    data
  );
  return response;
};
```

## 🧩 Componentes

### App.js
Componente principal que gerencia o estado da aplicação.

**Responsabilidades:**
- Gerenciar histórico de chat
- Processar submissões do formulário
- Orquestrar chamadas à API

**State:**
```javascript
- input: string       // Entrada atual do usuário
- chatlog: array      // Histórico de mensagens
```

**Métodos:**
```javascript
handleSubmit(e)       // Envia mensagem para API e atualiza chat
```

### ChatMessage Component
Renderiza uma mensagem individual no chat.

**Props:**
```javascript
{
  message: {
    user: string      // "me" ou "gpt"
    message: string   // Conteúdo da mensagem
  }
}
```

### SideMenu Component
Menu lateral para gerenciamento de conversas.

**Funcionalidades:**
- Nova conversa
- Histórico de conversas (futuro)
- Configurações (futuro)

## 🎨 Estilização

### Arquivos CSS
- `styles/index.css` - Estilos globais e reset
- `styles/App.css` - Estilos do componente App
- `styles/reset.css` - Reset de estilos padrão

### Estrutura CSS

```css
/* Containers principais */
.App              /* Container raiz */
.chatbox          /* Área de chat */
.chat-log         /* Histórico de mensagens */
.chat-input-holder /* Área de entrada */

/* Componentes */
.chat-message     /* Mensagem individual */
.chat-input-textarea /* Input de texto */
```

## 🔄 Fluxo de Dados

```
User Input (Chat Input)
        ↓
handleSubmit()
        ↓
makeRequest() (Axios)
        ↓
Backend API
        ↓
OpenAI API
        ↓
Response recebida
        ↓
setChatlog() (State update)
        ↓
Componentes re-renderizam
        ↓
Nova mensagem apareça no chat
```

## 🛠️ Scripts Disponíveis

```bash
# Inicia o servidor de desenvolvimento
npm start

# Cria build de produção
npm run build

# Executa testes
npm test

# Remove a configuração de build (irreversível)
npm eject

# Inicia server estático (após build)
npx serve -s build
```

## 📱 Responsividade

A aplicação é otimizada para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 🖥️ Desktop (1024px+)

### Media Queries Principais
```css
@media (max-width: 768px) {
  /* Estilos mobile */
}

@media (min-width: 768px) {
  /* Estilos tablet/desktop */
}
```

## 🔐 Boas Práticas

### ✅ Faça:
- Use componentes funcionais com hooks
- Mantenha componentes pequenos e focados
- Reutilize componentes quando possível
- Use prop types ou TypeScript para validação
- Implemente error handling

### ❌ Não Faça:
- Não expose chaves de API no frontend
- Não use `eval()` ou `dangerouslySetInnerHTML` sem necessidade
- Não armazene dados sensíveis em localStorage
- Não faça requisições diretas à OpenAI API (use backend)

## 🧪 Testes

```bash
# Executar testes em modo watch
npm test

# Executar testes com coverage
npm test -- --coverage
```

## 🐛 Troubleshooting

### Erro: "Cannot find module 'react'"
```bash
npm install
```

### Erro: "REACT_APP_API_URL não definida"
- Crie um arquivo `.env.local`
- Defina `REACT_APP_API_URL=http://localhost:3000`
- Reinicie o servidor

### Erro: "CORS error from backend"
- Verifique se o backend está rodando
- Verifique se CORS está habilitado no backend
- Verifique se a URL está correta em `.env.local`

### Erro: "Blank page no navegador"
- Verifique o console do navegador (F12)
- Verifique se há erros de JavaScript
- Tente limpar cache (Ctrl+Shift+Delete)

## 🚀 Build para Produção

```bash
# Criar build otimizado
npm run build

# Testa a build localmente
npx serve -s build
```

A pasta `build/` contém todos os arquivos prontos para deployment.

## 📊 Performance

### Otimizações Implementadas:
- ✅ Code splitting automático (Create React App)
- ✅ Lazy loading de componentes

### Melhorias Futuras:
- [ ] Memoização de componentes
- [ ] Virtualização de lista de mensagens (para chats grandes)
- [ ] Web Workers para processamento pesado
- [ ] Service Workers para offline support
- [ ] PWA (Progressive Web App)

## 🌐 Deployment

### Opções Populares:

#### Vercel
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
# Conecte seu repositório no dashboard
# Ou use CLI:
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

#### GitHub Pages
```bash
npm install --save-dev gh-pages

# Add ao package.json:
"homepage": "https://seu-usuario.github.io/chatgpt-clone",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

npm run deploy
```

## 📚 Recursos Adicionais

- [Documentação React](https://react.dev)
- [Documentação Create React App](https://create-react-app.dev)
- [Axios Documentation](https://axios-http.com)
- [MDN Web Docs](https://developer.mozilla.org)
- [React Patterns](https://reactpatterns.com)

## 🎓 Aprendendo

Tópicos importantes para entender este projeto:

1. **React Hooks**
   - `useState` - Gerenciar estado
   - `useEffect` - Efeitos colaterais

2. **HTTP Requests**
   - Axios para requisições
   - Tratamento de erros

3. **Component Architecture**
   - Props drilling
   - Component composition

4. **CSS**
   - Flexbox para layout
   - Media queries para responsividade

## 🤝 Contribuindo

Para contribuir com melhorias no frontend:

1. Crie uma branch para sua feature
2. Implemente com boas práticas
3. Teste em diferentes dispositivos
4. Faça um Pull Request

## 📝 Changelog

### v0.1.0
- ✅ Setup inicial com Create React App
- ✅ Componente App principal
- ✅ Componente ChatMessage
- ✅ Componente SideMenu
- ✅ Integração com API backend
- ✅ Estilos responsivos

## 📄 Licença

ISC

## 👨‍💻 Autor

**Nicodemus Souza Junior** - [@nicodemossjunior](https://github.com/nicodemossjunior)

---

⭐ Aprecie este projeto? Deixe uma estrela!
