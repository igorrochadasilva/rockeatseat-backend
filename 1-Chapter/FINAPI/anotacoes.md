# Primeiro Projeto com Node.js

**Conhecendo os requisitos da aplicação**

## FInApi - Financeira

### Requisitos

- [x] Deve ser possível criar uma conta
- [x] Deve ser possível buscar o extrato bancário do cliente
- [x] Deve ser possível realizar um depósito
- [x] Deve ser possível realizar um saque
- [x] Deve ser possível buscar o extrato bancário do cliente por data
- [x] Deve ser possível atualizar dados da conta do cliente
- [x] Deve ser possível obter dados da conta do cliente
- [x] Deve ser possível deletar uma conta
- [x] Dev ser possível retornar o balance

## Regras de Negócio

- [x] Não deve ser possível cadastrar uma conta com CPF já existente
- [x] Não deve ser possível buscar extrato em uma conta não existente
- [x] Não deve ser possível fazer depósito em uma conta não existente
- [x] Não deve ser possível fazer saque em uma conta não existente
- [x] Não deve ser possível fazer saque quando o saldo for insuficiente
- [x] Não deve ser possível excluir uma conta não existente

**Cadastro de conta**

- Criação de rota `post(/account)` recebendo body com `name` e `cpf` e retornando 201 created

**Validando CPF existente**

- Validando se já não existe usuário com mesmo CPF, caso exista, retorna status 400 com mensagem de customer já existente.

**Listando extrato**

- Criando rota `get(/statement/:cpf)` para acessar extrato de customer com cpf

**Validando Conta**

- Validando conta se `customer` existe e trocando forma de recebimento do cpf de params para headers

**Middlewares**

- Criando função que será o middleware de verificar se CPF existe
- A utilizar o `app.use(verifyIfExistsCPF)` todas as rotas posteriores, terá o middleware disponível.
- Para especificar que somente algumas rotas tenham o middleware, basta passar como segundo argumento

**Criando depósito na conta**

- Criando rota `"post(/deposit)"` que irá receber no body um `json {description, amount}` para ser inserido no statement, retornando status 201

**Criando saque na conta**

- Criado rota `post(/withdraw)` que irá receber body `{amount}` para ser retirado do valor total de crédito disponivel no statement.
- Criado função `getBalance` para calcular valor de balanço da conta quando for fazer saque e ver se tem crédito

**Listar extrato bancário por data**

- Criada rota `get(/statement/date)` que irá retornar transações com base na data passada como parametro.

**Atualizar conta**

- Criado rota `put(/account)` para alterar o nome do customer.
- Criado rota `get(/account)` para trazer informações do customer

**Remover conta**

- Criado rota `delete(/account)` para deletar customer
- Criado rota `get(/balance)` para trazer informações do balance.
