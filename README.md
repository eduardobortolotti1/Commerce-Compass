# Challenge 3 Compass.uol - Website e-commerce

## Sobre o projeto
Este projeto é referente ao terceiro desafio dado pela Compass.uol durante o período de estágio com a empresa. Nesse projeto, coloquei tanto em prática conceitos aprendidos durante o percurso do estágio quanto desenvolvi novos conhecimentos. O projeto foi desenvolvido de maneira individual para todos os membros do estágio, com prazo e apresentação online.

Utilizamos o protótipo fornecido no Figma para guiar o design e fluxo do website e uma resposta JSON pelo run mocky

### Tecnologias aplicadas
O projeto foi inteiramente feito com React e TypeScipt, com pacotes adicionais para impulsionar o desenvolvimento.
- **Vite** - Criação do projeto e configuração básica
- **React** - Biblioteca front-end poderosa para criação de componentes reutilizáveis
- **TypeScript** - Um superset de JavaScript que adiciona tipagem estática
- **Firebase** - Aplicado nas páginas de login/registro para autenticação web com login via conta Google e a criação de um AuthContext
- **Run Mocky** - Para mocks de respostas de API.
- **Bootstrap** - Framework de estilos CSS para economia de linhas
- **Webpack** - Empacotamento dos arquivos do projeto
- **Styled Components** - Pacote para facilitar a estilização de componentes no React
- **Swiper** - Uma biblioteca para o desenvolvimento de carroséis interativos
- **React-modal-sheet** - Usado para a criação da aba de filtro (Bottom Sheet)

## Deploy
O deploy da aplicação foi feita na plataforma Vercel. Acesse o site clicando neste [link](https://commerce-compass-eta.vercel.app/)

## Instalação

### Pré-requisitos
Antes de começar, verifique se você possui os seguintes requisitos instalados:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

### Configuração do Projeto Local
Siga estes passos para configurar o projeto em seu ambiente local:

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/seu-usuario/commerce-compass.git
   Acessar o diretório do projeto
   ```
2. **Acessar a pasta do projeto**
    ```bash
    cd commerce-compass
    ```
3. **Instalando dependências**
    ```bash
    npm install
    ```
4. **Configurar variáveis de ambiente do Firebase**
    - Crie um projeto no Console Firebase
    - Habilite a autenticação via Google e Email
    - Crie um arquivo .env no projeto com:
    ```bash
    VITE_FIREBASE_API_KEY=SUA_API_KEY
    VITE_FIREBASE_AUTH_DOMAIN=SEU_AUTH_DOMAIN
    VITE_FIREBASE_PROJECT_ID=SEU_PROJECT_ID
    VITE_FIREBASE_STORAGE_BUCKET=SEU_STORAGE_BUCKET
    VITE_FIREBASE_MESSAGING_SENDER_ID=SEU_SENDER_ID
    VITE_FIREBASE_APP_ID=SEU_APP_ID
    ```
5. **Inicie o servidor de desenvolvimento**
    ```bash
    npm run dev
    ```
### Scripts Disponíveis

Na pasta do projeto, você pode executar:

**npm run dev**: Inicia o servidor de desenvolvimento  
**npm run build**: Cria a versão de produção para deploy  
**npm run preview**: Inicia a build de produção localmente  
**npm run lint**: Executa análise estática do código  

## Demonstração
![Tela de login](https://i.imgur.com/lkWl0Vb.png)
![Tela home](https://i.imgur.com/IAO8zRL.png)
![Página de pesquisa](https://i.imgur.com/pWXb1DD.png)
![Tela de explorar produtos](https://i.imgur.com/ykUERCo.gif)
![Página de detalhamento do produto](https://i.imgur.com/Lj0Nejq.gif)
![Tela do carrinho](https://i.imgur.com/18NKevO.gif)