import express from 'express';
import dotenv from 'dotenv';
import setupSwagger from './swagger.js';
import authorRoutes from './routes/authorRoutes.js';
import booksRoutes from './routes/bookRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/authors', authorRoutes);
app.use('/books', booksRoutes);

setupSwagger(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
