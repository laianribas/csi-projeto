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

A Coordenação Setorial de Informática (CSI) da Universidade Estadual do Sudoeste da Bahia (UESB) vem enfrentando dificuldades no gerenciamento dos chamados de manutenção em informática e redes. Afim de reduzir tais dificuldades, está sendo criada uma ferramenta que tem como objetivo principal agilizar o processo de abertura e acompanhamento dos chamados. 

## :page_facing_up: Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env do **backend**

| *Chave*   | *Descrição*                                   |
| :---------- | :------------------------------------------ |
| `DATABASE_URL`      | Informar a URL do banco de dados (irá vairar se estiver rodando localmente ou no container)|
| `NODE_ENV`      | Para informar se o sistema está em modo de desenvolvimento ou produção|
| `SECRET_KEY`     | Essa é a sua chave criptográfica|
| `JWT_KEY`      | Chave para gerar Token de autenticação|


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

