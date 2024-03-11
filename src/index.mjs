import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

const mockUsers = [
  { id: 1, username: "corina", displayName: "Corina" },
  { id: 2, username: "toro", displayName: "Toro" },
  { id: 3, username: "mori", displayName: "Mori" },
]

app.get("/", (request, response) => {
  response.status(201).send({ msg: "Hello" })
});

app.get('/api/users', (request, response) => {
  response.send(mockUsers)
})

app.get('/api/users/:id', (request, response) => {
  console.log(request.params);
  const parsedId = parseInt(request.params.id);
  console.log(parsedId)
  if (isNaN(parsedId)) return response.setMaxListeners(400).send({ msg: "Bad request. Invalid ID" })

  const findUser = mockUsers.find((user) => user.id === parsedId)
  if (!findUser) return response.sendStatus(404);
  return response.send(findUser);
})

app.get('/api/products', (request, response) => {
  response.send([
    { id: 123, name: "chicken breast", price: 12.99 },
  ])
})

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
})