# Iniciando a API

## Typescript

**Introdução**

**Introdução Typescript**

- Uma linguagem open-source da Microsoft
- Superset do Javascript
- Tipagem estática

Por que usar o Typescript

- Com o typescript, é possível identificar os tipos de parâmetros passados nas variáveis.
- Declarar os tipos de parâmetros recebidos nas variáveis de modo a avisar quando for declarado de forma indevida

Mitos e Verdades

(X) Typescript veio para substituir o Javascript? Não
(v) Posso usar o typescript com Javascript no mesmo projeto? Sim
(x|v) A produtividade com typescript diminui? Depende
(x) Preciso tipar todas as variáveis? Não
(x) Typescript veio para transformar JS em C# ou Java? Não
(v) Typescript auxilia no desenvolvimento

**Criando projeto com Typescript**

- Criando pasta typescript
- Instalando typescript e seus @types
- Rodando yarn tsc para converter para javascript
- Aplicação agendamento de carros

**Adicionando os tipos**

- Criando class CreateCourseService e seus tipos de parâmetros recebidos.
- Criando function createCourse que irá chamar a createCourseService quando acessar rota

**Definindo os parâmetros obrigatórios**

- Typescript parâmetro opcional quando passado interrogação na tipagem

## Criando a API com NodeJs

**Configurando ts-node-env**

Link para configuração do ambiente de prittier e eslint.
https://www.notion.so/ESLint-e-Prettier-Trilha-Node-js-d3f3ef576e7f45dfbbde5c25fa662779

**Degubando a aplicação**

- Utilizando o debug para identificar erro na aplicação, definindo breakpoints e assistindo variáveis.

**Criando categorias**

- Criação de rota `/categories` para envio de nova categoria

**Inserindo ID com uuid**

- Instalando o uuid para utilizar o v4 que cria ids randômicos para cada inserção de categoria.

**Inserindo tipagem para categoria**

- Criando model `Category` para objeto categoria.
- Definindo o Id no constructor do model `Category`
- Utilizando o Object.assign para passar propriedades para um objeto

**Criando repositórios de categoria**

- Criando um repositório que ficara encarregado de fazer toda a manipulação de dados das categorias
- Criado class `CategoriesRepository` que irá inicializar o array de categorias e terá função de `create` de novas categorias

**Listando categorias**

- Criando método `list` para listagem de categorias quando for feito get na rota `/categories`

**Validando o cadastro de categoria**

- Criando validação para antes de criar categoria, verificar se já existe categoria a ser criada cadastrada.

**Entendendo o SOLID**

S => SRP - Single Responsibility Principle (Principio da Responsabilidade Única)
O => OCP - Open Closed Principle (Princípio aberto/fechado)
L => LSP - Liskov Substitution Principle (Princípio de Substituição de Liskov)
I => ISP - Interface Segregation Principle (Princípio da Segregação de Interface)
D => DIP - Dependency Inversion Principle (Princípio da Inversão de Dependência)

**Utilizando o Princípio de Responsabilidade Única (SRP)**

- Tiramos a responsabilidade da rota de fazer toda a regra de negocio, a rota agora apenas recebe a requisição, chama o `service` e faz o retorno da requisição.
- Foi feito a separação da regra de negocio, criando o `service CreateCategoryService` que fica encarregado de criar um novo cadastro

**Utilizando o Princípio da Substituição de Liskov (SRP)**

- Criado um arquivo de interface `ICategoriesRepository` que terá descrito as propriedades e métodos a serem implementados no repositório em questão.

- Os serviços devem definir que o parâmetro que receberão em seu construtor seja tipado/moldado com essa interface

- Assim, na rota, poderíamos usar bancos de dados diferentes, ou seja, repositórios diferentes desde que implementem a mesma interface, essa usada no Serviço.

## Continuação da aplicação

**Criando service de especificação e separando em módulos**

- Criado arquivo service `CreateSpecificationService` encarregado de fazer inserção de novos registros e validações
- Criado arquivo `SpecificationsRepository` encarregado de implementar o modelo do objeto da interface `ISpecificationsRepository`
- Criando pasta `cars` e movendo os models, repositories e services envolvidos para dentro.

**Corrigindo as importações**

- Correção de importações dos arquivos

**Criando repositório de especificação**

- Criando repositório `SpecificationsRepository` e suas propriedades e métodos
- Criando rota `specifications`.

**Criando os Use Case de Categoria**

- Foi feito a separação na aplicação criando o `UseCases` dentro do modulo de carro.
- Cada operação terá sua própria pasta, foi criado o `createCategory` ao qual criamos o `createCategoryController` que tem toda a responsabilidade que antes estava na rota.
- Cada useCase tem apenas uma única responsabilidade
- Criando o index que faz todas as instancias.

**Refatorando a listagem de categoria**

- Criando o useCase `ListCategories` e controller para separar a responsabilidade da requisição da rota.

**Conhecendo Singleton Pattern**

- Criando uma única instancia de modo que sempre que for chamado o `CategoriesRepositories` não se crie uma nova instancia se iniciando com zero mas sim retornando a primeira instancia criada.

**Criando use case de especificação**

- Criando useCase `CreateSpecificationController` e `CreateSpecificationUseCase`.
- Criado `index` para instanciar.

**Refatorando as rotas**

- Criando arquivo `index` na pasta `routes` e trazendo as rotas para ele.

## Trabalhando com Upload

**Conhecendo o Multer** -https://www.npmjs.com/package/multer

- Multer é um middleware node.js para manipulação multipart/form-data, que é usado principalmente para fazer upload de arquivos.

**Criando upload de arquivos**

- Utilizando o multer, para receber arquivos por requisição e salvar na pasta `tmp`

**Criando o use case para importar categorias**

- Criado `ImportCategoryController`, `ImportCategoryUseCase` e `index` e alterado a router para deixar o execute no controller e usecase.

**Conhecendo o conceito de stream**

- O stream permite que nos leia um arquivo por partes
- Utilizando o `csv-parse` para leitura de arquivo e sua separação de dados por virgula, pontos. tabela.

**Fala Dev**
- Repositories: Classes que manipulam os dados orientados das Entities. Aqui é feito todos os cadastros, listagem, edição, deleção desses dados. Vale ressaltar que aqui não há nenhuma verificação, como se já existe algum usuário antes de inserir outro com os mesmos dados e etc. Aqui é a forma pura de manipulação dos dados.

- useCases/Services: São classes que possuem uma única responsabilidade específica e que acessam os repositories para realizar sua tarefa. Aqui sim entram as regras de negócio. Por exemplo, para criar um usuário na aplicação, um CreateUserUseCase que terá a única função de criar um usuário, contudo, ele validará se já existe um usuário com o e-mail enviado, por exemplo, para aí sim chamar o repositório de usuários para realizar a criação deste usuário.

- Controllers: São as classes que tem a única responsabilidade de receber o que vem da rota (o request), enviar esses dados para o useCase ou Service e retornar (o response) a resposta do useCase (ou Service) para a rota.

**Lendo os dados do upload**
- Recebendo todos os dados do `ImportCategoryUseCase`, criando um objeto para cada linha de dados e inserindo dentro do array `categories` através de uma `Promise`.

**Inserindo os dados do upload no repositório**
- No arquivo `ImportCategoryUseCase`, criado o método `execute` para receber as categorias com o `loadCategories` e logo depois utilizar o `map` para percorrer o array de categories, e adiciona um novo registro.


## Iniciando a documentação

**Conhecendo o swagger**
- Este módulo permite veicular documentos de API gerados automaticamente por swagger-ui do express, com base em um swagger.json arquivo. O resultado é uma documentação viva para sua API hospedada em seu servidor de API por meio de uma rota.

- A versão Swagger é extraída do módulo npm swagger-ui-dist. Use um arquivo de bloqueio ou especifique a versão do swagger-ui-dist que você deseja para garantir que seja consistente em todos os ambientes.

- npm i swagger-ui-express

**Configurando o swagger**

- Definindo rota para acessar documentação do swagger
- `/api-docs`

**Criando a documentação de criação de categoria**

- Criando as rotas de documentação para cada rota de categoria com o swagger.

**Criando documentação da listagem de categorias**

- Criando documentação do get na rota `/categories` com o swagger

**Removendo os arquivos de upload**

- Após fazer a varredura do arquivo, remove-lo utilizando o file-system
