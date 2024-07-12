// src/models/book.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Author from './author.js';

class Book extends Model {}
Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Author,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Book',
  }
);

Book.belongsTo(Author, { foreignKey: 'authorId' });
Author.hasMany(Book, { foreignKey: 'authorId' });

export default Book;
