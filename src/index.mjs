import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
  response.status(201).send({ msg: "Hello" })
});

app.get('/api/users', (request, response) => {
  response.send([
    { id: 1, username: "corina", displayName: "Corina" },
    { id: 2, username: "toro", displayName: "Toro" },
    { id: 3, username: "mori", displayName: "Mori" },
  ])
})

app.get('/api/products', (request, response) => {
  response.send([
    { id: 123, name: "chicken breast", price: 12.99 },
  ])
})

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
})