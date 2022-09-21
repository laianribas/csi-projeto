# Back-end
## :toolbox: Tecnologias utilizadas

| *Tecnologia*   | *Versão*                                   |
| :---------- | :------------------------------------------ |
| [TypeScript](https://www.typescriptlang.org/)      | ^4.7.2|
| [Prisma](https://www.prisma.io/)      | ^3.13.0|
| [Express](https://expressjs.com/)      | ^4.18.1|
| [JsonWebToken](https://jwt.io/)      | ^8.5.1|
| [Nodemon](https://www.npmjs.com/package/nodemon)      | ^2.0.16|
| [SwaggerUI Express](https://www.npmjs.com/package/swagger-ui-express)      | ^4.5.0|
 

## :computer: Instalação e execução: passo-a-passo
### :warning:Atenção!:warning:

Para rodar o projeto localmente, é necessário alterar a variável de ambiente de configuração de banco de dados (`DATABASE_URL`) no arquivo .env ([exemplo](.env.example)) no backend. Seguindo a documentação do Prisma e o formato sugerido pelo PostgreSQL, segue abaixo a formatação:

<div>

![Imgur](https://i.imgur.com/5vGK38c.png)


</div>

Logo, um bom exemplo de configuração da variável é: 

```javascript
  postgresql://USER:PASSWORD@HOST:PORT/DATABASE
```

Clone o repositório

```bash
  git clone https://github.com/laianribas/csi-projeto.git
```

Entre no diretório do back-end do projeto

```bash
  cd csi-projeto/backend
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```

## :mailbox_with_mail: Fazendo requisições para a API

Para fazer uma requisição para a API, é necessário que alguns **headers** sejam informados. Segue o exemplo sugerido de uma requisição feita com o Axios:

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: `http://localhost:5000/setor`,      // informar a rota
  headers: { 
    'permission': '18',                    // informar o ID da permissão para que seja verificado o acesso
    'Authorization': `Bearer mytoken`      // Substitua o 'mytoken' pelo token gerado pelo JWT
  }
};

axios(config)
.then(function (response) {
  const data = (JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

```
