import express from 'express';

const app = express();

app.use(express.json());

const PORT = 3333;

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World!' });
});

app.post('/acount', (request, response) => {
  const { name } = request.body;

  return response.status(201).send({ message: 'Customer created!' });
});

app.listen(PORT, () => console.log(`Server is running on port:${PORT}!`));
