# Back-end

## :computer: Instalação e execução: passo-a-passo:

Clone o repositório

```bash
  git clone https://github.com/laianribas/csi-projeto.git
```

Entre no diretório do projeto

```bash
  cd backend
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```

## :mailbox_with_mail: Documentação da API:

Antes de mais nada, para fazer uma requisição para a API, é necessário que alguns **headers** sejam informados. Segue o exemplo de uma requisição feita com o Axios:

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
