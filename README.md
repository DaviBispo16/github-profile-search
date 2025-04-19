# GitHub Profile Search

Um aplicativo React que permite aos usuários pesquisar perfis do GitHub e visualizar informações básicas. O aplicativo é colocado em contêineres com o Docker para facilitar a configuração e os ambientes consistentes.

![alt text](public/app.png)

## Recursos

Pesquisar usuários do GitHub por nome de usuário

Exibir avatar do usuário e biografia

Design responsivo com React Hooks

Tratamento de erros para usuários inexistentes

## Tecnologias
- JavaScript (ES6+) para componentes React e lógica de aplicativos

- HTML5 para marcação

- CSS3 para estilização

- Docker para conteinerização

## Pré-requisitos

Antes de começar, verifique se você tem os seguintes itens instalados:

- Docker

- Git

## Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/DaviBispo16/github-profile-search.git
   cd github-profile-search
   ```
2. Executar o Docker-Compose para iniciar a aplicação
    ```bash
    docker-compose up --build -d
   ```

## Uso
1. Abra seu navegador e navegue até http://localhost:3000.

2. Digite um nome de usuário do GitHub na barra de pesquisa.

3. Veja os detalhes do perfil retornados pela API do GitHub.

