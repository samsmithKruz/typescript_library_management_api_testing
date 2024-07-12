// src/models/index.ts
import sequelize from '../config/database.js';
import Author from './author.js';
import Book from './book.js';

const db = {
  sequelize,
  Author,
  Book,
};

export default db;
