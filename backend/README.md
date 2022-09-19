# Back-end

**Para instalar e executar o projeto execute o passo-a-passo:**

Clone o repositório

```bash
  git clone https://link-para-o-projeto
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

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: `http://localhost:5000/${rota}`,
  headers: { 
    'permission': `${permissionId}`, 
    'Authorization': `Bearer ${token}`
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
