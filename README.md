# Desafio do Caixa Eletrônico
Esse é o [desafio do caixa eletrônico](http://dojopuzzles.com/problemas/exibe/caixa-eletronico/) e nele precisamos seguir os [requisitos propostos aqui](http://dojopuzzles.com/problemas/exibe/caixa-eletronico/).
Talvez você esteja tentando entender por quê foi feito uma API com toda a sua estrutura de projeto para um desafio super simples. A resposta mais correta é que esse é um desafio e com ele quero te mostrar o que eu conheço sobre a stack que utilizei :laughing:


## Pré-requisitos
* [Node.js](https://nodejs.org/en/) (Recomendamos a versão 12 ou superior)
* [NPM](npmjs.com)
* [Docker](https://www.docker.com/get-started)
* [Docker-compose](https://docs.docker.com/compose/install/)

## Iniciando o projeto

### Iniciando o projeto em container

Para executar a aplicação em container, basta executar o comando abaixo e deixar a mágica acontecer:
```
npm run start:container
```

Após isso, basta seguir os passos em [Realizando saque](#realizando-saque)

### Iniciando o ambiente de dev
1. Instale as dependências do projeto
```
npm install
```
2. Copie e cole o arquivo .env.example e renomeie para .env
```
cp .env.example .env 
```
3. Execute o script dev para subir a aplicação
```
npm run dev
```

Após isso, basta seguir os passos em [Realizando saque](#realizando-saque)

## Realizando saque

### Acessando a documentação

Estamos utilizando o [Swagger](https://swagger.io) para nos auxiliar com a documentação da API seguindo a OpenAPI Specification.
Com o projeto rodando na porta `3000`, basta acessar o endereço http://localhost:3000/api-docs para visualizar a documentação com a interface do Swagger.

Caso preferir, segue um exemplo de requisição via cUrl:
```
curl --request GET \
  --url 'http://localhost:3000/api/withdraw?amount=1050'
```

## Testes

### Executando os testes

Estamos utilizando o [Mocha.js](https://mochajs.org) como framework de testes, juntamente com o [supertest](https://www.npmjs.com/package/supertest) para simular as requisições nos testes de integração, o [chai](https://www.chaijs.com) para nos ajudar com as asserções e o [nyc](http://npmjs.com/package/nyc) para cuidar da cobertura de código.

Para executar os testes, é necessário:

1. Instalar as dependências:
```
npm install
```
2. Iniciar os testes:
```
npm test
```

Após isso, é possível visualizar o percentual de cobertura do código e analisar linha a linha. Para isso, basta abrir no navegador o arquivo `PROJECT_DIR/coverage/index.html`. Será possível navegar em telas semelhante à essas:

![coverage index](coverage-index.png "Coverage - Index")

![coverage file example](coverage-file-example.png "Coverage - File Example")
