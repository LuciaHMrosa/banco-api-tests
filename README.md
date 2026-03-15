# banco-api-tests

## 📌 Objetivo

Este projeto tem como objetivo realizar **testes automatizados na API
REST do projeto banco-api**, validando suas funcionalidades e
contribuindo para garantir a qualidade e o correto funcionamento das
operações da API.

Os testes automatizados verificam diferentes cenários da API, como
autenticação e operações de transferências, validando **status code,
estrutura da resposta e valores retornados**.

Projeto utilizado como prática de **automação de testes de API
utilizando JavaScript e Node.js**.

------------------------------------------------------------------------

## 🔗 Projetos relacionados

API testada neste projeto:

https://github.com/juliodelimas/banco-api

Repositório deste projeto de testes:

https://github.com/LuciaHMrosa/banco-api-tests

------------------------------------------------------------------------

## 🧰 Stack utilizada

As seguintes tecnologias e bibliotecas foram utilizadas neste projeto:

-   **JavaScript (Node.js)** -- Linguagem utilizada para escrever os
    testes\
-   **Mocha** -- Framework de execução dos testes\
-   **Supertest** -- Biblioteca para realizar requisições HTTP\
-   **Chai** -- Biblioteca de asserções para validação dos resultados\
-   **Mochawesome** -- Geração de relatórios em HTML dos testes\
-   **dotenv** -- Gerenciamento de variáveis de ambiente

------------------------------------------------------------------------

## 📁 Estrutura de diretórios

    banco-api-tests/
    │
    ├── test/                    # Testes automatizados
    │   ├── login.test.js
    │   └── transferencias.test.js
    │
    ├── helpers/                 # Funções auxiliares utilizadas nos testes
    │
    ├── fixtures/                # Dados reutilizáveis utilizados nos testes
    │
    ├── mochawesome-report/      # Relatórios HTML gerados após execução dos testes
    │
    ├── .env                     # Variável de ambiente com URL da API
    ├── .gitignore
    ├── package.json
    └── README.md

------------------------------------------------------------------------

## ⚙️ Configuração do ambiente

Antes de executar os testes, é necessário criar um arquivo chamado:

    .env

Na raiz do projeto com o seguinte conteúdo:

    BASE_URL=http://localhost:3000

Substitua pela URL onde a API **banco-api** está rodando.

------------------------------------------------------------------------

## ▶️ Instalação das dependências

Execute o comando abaixo para instalar todas as dependências do projeto:

    npm install

------------------------------------------------------------------------

## 🧪 Executando os testes

Para executar todos os testes automatizados:

    npm test

------------------------------------------------------------------------

## 📊 Relatório de execução dos testes

Após rodar os testes, será gerado automaticamente um relatório HTML
utilizando o **Mochawesome**.

O relatório ficará disponível na pasta:

    mochawesome-report/

Arquivo gerado:

    mochawesome.html

------------------------------------------------------------------------

## 📚 Documentação das dependências

Mocha\
https://mochajs.org/

Supertest\
https://www.npmjs.com/package/supertest

Chai\
https://www.chaijs.com/

Mochawesome\
https://www.npmjs.com/package/mochawesome

dotenv\
https://www.npmjs.com/package/dotenv

------------------------------------------------------------------------

## 👩‍💻 Autora

Projeto desenvolvido por **Lucia Rosa** como prática de automação de
testes de API utilizando **JavaScript e Node.js**.

------------------------------------------------------------------------

## 🚀 Aprendizados com este projeto

Durante o desenvolvimento deste projeto foram aplicados conceitos
importantes como:

-   Automação de testes de API REST
-   Estruturação de testes utilizando Mocha
-   Realização de requisições HTTP com Supertest
-   Validação de respostas utilizando Chai
-   Organização de dados com Fixtures
-   Reutilização de código com Helpers
-   Geração de relatórios de execução de testes
-   Versionamento de código com Git e GitHub
