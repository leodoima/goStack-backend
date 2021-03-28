import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Rota acessada com sucesso!' });
});

app.listen(3333, () => {
  console.log('🍧 Server on Fire!');
});
