// src/models/author.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

class Author extends Model {}
Author.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Author',
  }
);

export default Author;
