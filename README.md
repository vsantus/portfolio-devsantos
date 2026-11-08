# Devsantos — Portfólio Full Stack

Portfólio profissional de Vinicius Santos, desenvolvido com React e Vite. O site apresenta experiência, serviços, stack e cases de desenvolvimento web.

## Stack do projeto

- React
- React Router
- Vite
- Bootstrap
- Framer Motion
- EmailJS

## Executando localmente

Requisitos: Node.js 22 ou superior.

```bash
npm install
npm run dev
```

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha as credenciais públicas do EmailJS. Enquanto essas variáveis não forem definidas, o projeto usa a configuração atual para manter o formulário funcionando.

## Verificações

```bash
npm run lint
npm run build
```

## Deploy de SPA

O site usa `createBrowserRouter`. A hospedagem deve redirecionar rotas desconhecidas para `index.html` para que URLs internas funcionem ao serem abertas diretamente.

## Adicionando um novo trabalho

1. Coloque a imagem de capa em `src/assets/images/projects/`.
2. Importe a imagem e adicione o case em `src/utlits/fackData/projectData.jsx`, preenchendo `category`, `title`, `link`, `summary` e `outcome`.
3. Crie a página detalhada em `src/pages/pagesProject/`.
4. Registre a nova rota na lista de cases em `src/route/router.jsx`.

O card será incluído automaticamente na home e nos filtros de projetos.
