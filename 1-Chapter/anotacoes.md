# Fundamentos do Node.js

### Conceitos

**Introdução**

- Introdução somente.

**Conceitos do Node**
`O que é?`

- Plataforma open-source permite execução da linguagem javascript do lado do servidor
- v8 + libuv + conjunto de módulos(libuv é uma library multi plataforma)

`O que é node veio resolver?`

- Ryan Dahl criador
- Barra de progresso do flickr
- Tecnologias da época não davam um bom suporte ao processo I/O(Entrada/saida)

`Características do Node.js`

- Arquitetura Event Loop, Call Stack
- Single - Thread
- Non-blocking I/O
- Módulos props - http, dns, fs, buffer

`Evennt Loop`

Sempre que uma função chea pra CallStack, o event loop fica ouvindo as funções que chegam.
|------------|
| Call Stack |
|function (1)|
|function (2)|
|function (3)|
|------------|

`Oque são gerenciadores de pacotes`

- NPM e Yarn
- Instalar Bibliotecas externas
- Disponibilizar bibliotecas
- Vamos utilizar o Yarn

`Frameworks`

- Express , simples porem completo que vamos utilizar.
- Egg.js
- Nest.js
- Adonis.js

**Conceitos sobre API REST**

`O que é API`

- Application Programming Interface(Interface de programação de aplicativos)
- Conjunto de especificações de possíveis interações entre aplicações
- Documentação para desenvolver

`O que é REST`

- Representation State Transfer (Transferência Representacional de Estado)
- Modelo de Arquitetura
- 6 Regras

`Regras`

1. Client-Server (vêm da idéia de deixar para o servidor todo o processamento, retirando assim da máquina do cliente essa tarefa que muitas vezes é tão pesada.)

2. Stateless (um protocolo sem estado é um protocolo de comunicação que considera cada requisição como uma transação independente que não está relacionada a qualquer requisição anterior, de forma que a comunicação consista de pares de requisição e resposta independentes.)

3. Cache (Deve construir a aplicação de modo que o Cache possa ser feito.)

4. Interface Uniforme

- Identificação dos recursos
  -- http://enderecoservidor.com.br/products
- Representação dos recursos
- Mensagens auto-descritivas
- Hateoas (Hypertext As the Engine of application State) (retorna links na aplicação)

5. Camadas (Camadas entre client e server)

6. Código Sob Demanda (Funcionalidades do cliente sejam estendidas)

**Métodos de Requisição**

- GET - Leitura
- Post - Criação
- Put - Atualização
- Delete - Deleção
- Patch - Atualização parcial

`HTTP Codes`

Tipos de retornos

.1XX: Informativo - a solicitação foi aceita ou o processo continua em andamento

.2XX: Confirmação
-- 200:Requisição bem sucedida
-- 201:Created - Geralmente usado para POST após uma inserção

.3XX: Redirecionamento
-- 301: Moved Permanently
-- 302: Moved

.4XX: Erro do cliente
-- 400: Bad Request
-- 401: Unauthorized
-- 403: Forbidden
-- 404: Not Found
-- 422: Unprocessable Entity

.5XX: Erro no servidor - o servidor falhou ao concluir a solicitação.
-- 500: Internal Server Error
-- 502: Bad Gateway

`Parâmetros das Requisições`

1. Header Params: authority, method, path, scheme, referer

2. Query Params: http://enderecoservidor.com.br/v1/user?`page=2`&`limit=50`

- page: chave
- 2: valor
- &: separação

3. Route Params - http://enderecoservidor.com.br/v1/`{id}`

4. Body Params
   {
   "name": "Daniel"
   "username": "Dani
   }

`Boas práticas de API REST`

- A utilização correta dos métodos HTTP
- A utilização correta dos status no retorno das respostas
- Padrão de nomenclatura

- Busca de usuários - GET
  ex: http://enderecoservidor.com.br/v1/users
- Busca de usuário por id - GET
  ex: http://enderecoservidor.com.br/v1/users/1
- Busca de endereço do usuário - GET
  ex: http://enderecoservidor.com.br/v1/users/1/address
- Deleção de um usuário - Delete
  ex: http://enderecoservidor.com.br/v1/users/1
- Atualização do status do usuário - PATCH
  ex: http://enderecoservidor.com.br/v1/users/1/status

## Configuração do Projeto

**Criando a estrutura do projeto**

- Iniciando projeto com yarn init y
- Utilizando o express para criar servidor, ouvir porta 3333 com o `listen` e rota com `get`

**Adicionando o Nodemon na aplicação**

- Instalando o nodemon para sempre que tiver uma alteração na aplicação, der reload na mesma.
- yarn add nodemon -d

**Utilizando os métodos HTTP**

- Criando rotas com os metodos, post, get, path, put, delete.

**Utilizando o Insomnia**

- Utilizando a ferramenta insominia para envio de requests

**Tipos de parâmetros**

- Abordando os tipos de parametros no node, utilizando o express.
- Route Params
- Query Params
- Body Params
