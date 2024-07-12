import { Request, Response } from 'express';
// import db from '../models';

const getBooks = async (req: Request, res: Response) => {
  // const books = await db.Book.findAll({ include: db.Author });
  const books = {
    id: 1,
    title: "Sampling",
    authorId: 1
  }
  res.json(books);
};

const createBook = async (req: Request, res: Response) => {
  // const book = await db.Book.create(req.body);
  const book = {
    id: 1,
    title: "Sampling",
    authorId: 1
  }
  res.status(201).json(book);
};

export { getBooks, createBook };
