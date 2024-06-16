import express from 'express';
import 'dotenv/config';
import cors from 'cors';

const app = express();
const port = 5000; 

app.use(cors());

console.log(process.env.PORT);

app.get('/', (req, res) => {
  res.send('Hola desde el backend de Node.js!');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});