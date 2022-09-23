# SIGMAINFO

<div align="center">

![Logo](https://i.imgur.com/Oe1WClw.png)


</div>

<div align="center">

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

</div>

## :mag: Sobre

A Coordenação Setorial de Informática (CSI) da Universidade Estadual do Sudoeste da Bahia (UESB) vem enfrentando dificuldades no gerenciamento dos chamados de manutenção em informática e redes. A fim de reduzir tais dificuldades, está sendo criada uma ferramenta que tem como objetivo principal agilizar o processo de abertura e acompanhamento dos chamados. 

## :page_facing_up: Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env do **Back-end**. Segue o exemplo no arquivo [.env.example](backend/.env.example)

| *Variável*   | *Descrição*                                   |
| :---------- | :------------------------------------------ |
| `DATABASE_URL`      | Informar a URL do banco de dados (irá vairar se estiver rodando localmente ou no container)|
| `NODE_ENV`      | Para informar se o sistema está em modo de desenvolvimento ou produção|
| `SECRET_KEY`     | Essa é a sua chave criptográfica|
| `JWT_KEY`      | Chave para gerar Token de autenticação|

## :toolbox: Principais Tecnologias utilizadas

 - **Back-end**

  | *Tecnologia*   | *Versão*                                   |
  | :----------: | :------------------------------------------: |
  | [TypeScript](https://www.typescriptlang.org/)      | ^4.7.2|
  | [Prisma](https://www.prisma.io/)      | ^3.13.0|
  | [Express](https://expressjs.com/)      | ^4.18.1|
  | [JsonWebToken](https://jwt.io/)      | ^8.5.1|
  | [Nodemon](https://www.npmjs.com/package/nodemon)      | ^2.0.16|
  | [SwaggerUI Express](https://www.npmjs.com/package/swagger-ui-express)      | ^4.5.0|


 - **Front-end**

  | *Tecnologia*   | *Versão*                                   |
  | :----------: | :------------------------------------------: |
  | [ApexCharts](https://apexcharts.com)      | ^3.27.3|
  | [Axios](https://axios-http.com/ptbr/docs/intro)      | ^0.27.2|
  | [React](https://pt-br.reactjs.org)      | ^17.0.2|
  | [React Router DOM](https://v5.reactrouter.com/web/guides/quick-start)      | 5.2.1|



## :whale: Rodando com Docker

Clone o projeto

```bash
  git clone https://github.com/laianribas/csi-projeto.git
```

Entre no diretório do projeto

```bash
  cd csi-projeto
```

Faça o Build do docker compose

```bash
  docker compose build
```
Suba os containers

```bash
  docker compose up -d
```
## :desktop_computer: Rodando sem Docker

#### Siga as instruções presentes nos diretórios:
- **[Back-end](backend)** 
- **[Front-end](frontend)**

## Suporte e Feedback

Para suporte e Feedback, mande um email para laian67a@gmail.com
