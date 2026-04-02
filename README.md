Para começar, agradeço a oportunidade e o reconhecimento.
Criei essa solução utilizando as documentações e sem uso de IAs.
Acredito que elas são ferramentas para facilitar e acelerar o processo de codar, mas claro que não são obrigatórias.

# Sobre o projeto.

Para iniciar, adicionei o arquivo _.nvmrc_ com a versão do node (v24 LTS).
Então se tiver no linux, basta rodar:

```bash
nvm i
```

Todo o projeto foi realizado nessa versão, então deixei na raíz.

# 1. Exercícios de lógica

Decidi realizar a solução dos exercícios de lógica com arquivos .js invés de .ts para a facilidade.

Então para testar, rode o comando para o exercício 1.1

```bash
node logica/analise_de_vendas.js
```

e para o 1.2

```bash
node logica/agrupamento_e_recursao.js
```

## Ex 1.1:

- Comecei a funcão filtrando as vendas aprovadas, já que somente elas seriam consideradas.
- Após, criei o objeto de retorno para facilitar tanto a visualização do necessário quanto facilitar a utilização.
- Criei uma variável para auxiliar a fazer o agrupamento de valor total para cada vendedor.
- Iniciei um loop para somar os valores
- Com base no total, tirei a média
- Fiz um loop nos vendedores para pegar o nome e valor total e adicionar no ranking.
- Ordenei o ranking e peguei o primeiro para ser o top vendedor.
- Retornei o resultado.

## Ex 1.2:

> Esse é um clássico do leetcode, gosto de aplicar.

- Primeiro eu crio uma variável para salvar os resultados.
- Percorro as categorias para adicionar elas no array de resultados.
- Verifico se tem filhos e, se tiver, chamo a função novamente passando os filhos e então dou um push no resultado com os '...' para salvar os itens do array de retorno, fazendo assim um array plano.
- Retorno o resultado que, em recursão, faz com que o resultado seja um array plano.

# 2. Desafio prático

## Backend:

Optei por utilizar o Express para fazer a API, pois é um projeto mais simples.
A arquitetura de pastas foi pensada dessa forma para não ser tão pesada, mas claro que em um projeto maior eu adicionaria mais camadas.

src /
|- controllers
|- middlewares
|- models
|- routes
|- schemas
|- index.ts
|- server.ts

Acredito que esse sejá o básico para um projeto, em um projeto maior eu adicionaria uma pasta de useCases, entities, implementations, utils, libs, etc.

### Como rodar:

Primeiro, utilizando a versão 24 lts do node, entre na pasta do backend

```bash
cd backend
```

E então baixe as dependencias

```bash
npm install
```

Utilize o comando pré definido para iniciar o servidor

```bash
npm run dev
```

O Servidor iniciará na porta 3000, e uma mensagem de log vai aparecer para confirmação visual.

### index.ts e server.ts

O arquivo de server é onde eu crio e configuro o servidor express, adiciono os middlewares, adiciono as rotas e etc., para que no index seja utilizado.
O arquivo de index é a porta de entrada do backend, onde eu coloco o servidor criado para rodar.

### routes

Na pasta routes tenho o arquivo index.ts onde nele eu configuro a parte geral das rotas e depois adiciono a primeira divisão, que estão nos arquivos leads.route.ts e dashboard.route.ts que enfim ficam os endpoints.
Esses endpoints chamam os controllers, passando a requisção para frente.

### schemas

Nessa pasta separada eu gosto de colocar os validadores de campos, para utilizar no controller.
Optei pelo zod, pois é o que tenho mais intimidade e por ser confiável e simples de se utilizar.

### controller

É a pasta onde faço a lógica de negócios do projeto, onde ficam as funções que vão receber as informações da requisição, tratar os dados e retornar o response. (gosto em projetos de separar essa parte em controller para mexer só com a requisição e um useCase para tratar as regras de negócio).

### models

Aqui ficam os modelos, no caso só tem o da lead. É onde eu defino os atributos que as entidades vão ter.
E também estou simulando o banco de dados com um array in memory.

### middlewares

Separadamente os middlewares ficam aqui, criei um para logs de requisições e um para tratamento de excessóes.

- Os logs vem assim que a requisição é feita, me dando a informação de qual o método chamado e qual endpoint.
- Os erros são recebidos aqui e tratados para retornar de forma padronizada.

## Frontend:

Optei pela utilização do React com Vite por ser o que tenho mais familiaridade.
Para componentes e estilização, utilizei tailwindcss e shadcn. Pois facilitam nesse momento e me dão liberdade para adaptar os componentes da forma que for necessário.
Utilizei Axios para o consumo de apis.

### Como rodar:

Primeiro, utilizando a versão 24 lts do node, entre na pasta do frontend

```bash
cd frontend
```

E então baixe as dependencias

```bash
npm install
```

Utilize o comando pré definido para iniciar o servidor

```bash
npm run dev
```

A página iniciará na porta 5173.
