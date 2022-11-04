# Continuando a aplicação

## Conhecendo o Docker

**Introdução**

**O que é o Docker**

- Ferramenta para criação de containers
- Container: Ambiente isolado
- Imagens: Instruções para criação de um container
- O que "roda" localmente "roda" em produção
- Mesmo SO, compartilhando recursos da máquina host

**Criando nosso primeiro container e dockerfile**
- Configurando dockerfile.
- versão: `docker -v`
- criar imagem: `docker build -t rentx .`
- ver containers rodando: `docker ps`
- rodar container: `docker run -p 3333:3333 rentx`

**Usando docker compose**
- Utilizando o docker compose para definir serviços, dependências da aplicação, variáveis de ambiente.
- criando arquivo `docker-compose.yml`

**Comandos do docker**
- Listar containers `docker -p`
- Rodar container da app `docker compose up`
- Rodar container do app em background `docker compose up -d`
- Mostrar execução em ação do docker `docker logs {app name} -f`
- Com o docker compose, é somente necessário o docker e o compose em outra maquina para conseguir rodar os serviços da aplicação.
- Parar container - `docker stop {id do container}`
- Remover container - `docker rm {id do container}`
- remove tudo que foi criado `docker-compose down`
- inicia os serviços dentro do docker-compose `docker-compose start`
- Para os serviços dentro do docker-compose `docker-compose stop`
- acessar container `docker exec -it rentx /bin/bash`
- acompanhar os logs da imagem `docker logs {image name} -f`

## Trabalhando com Banco de Dados

**Conhecendo as formas de usar o banco de dados**

https://node-postgres.com/
- Cada driver pode se comportar de uma forma  diferente, isso acaba sendo um problema.

https://knexjs.org/
- Query builds, knex é um bem utilizado.

https://typeorm.io/
- O TypeORM, como o próprio nome diz, é um ORM. Ok, mas o que isso significa?
Object-Relational Mapping (ORM), em português, mapeamento objeto-relacional, é uma técnica para aproximar o paradigma de desenvolvimento de aplicações orientadas a objetos ao paradigma do banco de dados relacional. O uso dessa técnica é realizado com o auxílio de um framework, como por exemplo, o TypeORM e o Sequelize.

**Instalando o TypeORM**

- instalando o Type ORM com o `yarn add typeorm reflect-metadata`
- Intalando o postgress `yarn add pg --save`
- Criando arquivo `ormconfig`

**Criando container do postgres**

- Criando service database no docker-compose do banco de dados.

- Identificando IPaddress: `docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' database_ignite`

- Atualizar informações dos containers `docker-compose up -d —force-recreate`

**Aprendendo o conceito de migrations**

- É como se fosse um versionamento de tudo que fazemos no banco de dados

**Criando migrations de categoria**

- Criando script para rodar typeorm para criação de migration
- Criação de table com migration
- Rodar migration: `yarn typeorm migration:run`
- reverter migration: `yarn typeorm migration:revert`

**Refatorando o model de categoria**
- Definindo a class como entidade.
- Mapeando os atributos do model de categoria para referencia cada um uma coluna

**Alterando o repositório de categoria**
- Alterando o repositório de categoria para utilizar o `Repository` do `typeorm` e seus métodos, estendendo seus atributos e métodos.

**Refatorando o caso de uso de categoria**
- Atualizando os arquivos do createCategory e deixando assíncrono para
- Removendo instance, que não será mais necessário.
- Alterando o `Index` do createCategory para função para não ser chamado no momento que a rota é chamada, para ter um controle melhor do momento que as informações são chamadas

**Entendendo as alterações**
- Foi feito a refatoração do repositório de categoria, antes precisávamos criar uma instancia pois sempre que salvávamos na memoria, era criado um novo array, por isso a utilização da instancia, mas agora que estamos salvando no banco de dados, não é mais necessário, então foi removido.
- O `constructor` que era `private` e somente a class `CategoriesRepository` tinha acesso, foi removido, agora ele é publico e podemos dar `new Repository`.
- Sempre que chamava o arquivo de rotas, ele entrava no arquivo de rotas das categorias e ele acessava arquivo por arquivo, exemplo: createCategory, o código estava solto, logo o código já era executado e executava o `new CategoriesRepository` mas ainda não tínhamos o banco de pé, por isso dava o erro de não achar conexão. Então foi criado uma função que englobava tudo para controlar o momento a ser chamado.
