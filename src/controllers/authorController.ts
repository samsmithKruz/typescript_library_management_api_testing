import { Request, Response } from 'express';
// import db from '../models';

const getAuthors = async (req: Request, res: Response) => {
  // const authors = await db.Author.findAll();
  const authors = {
    id: 1,
    name: "John Doe"
  }
  res.json(authors);
};

const createAuthor = async (req: Request, res: Response) => {
  // const author = await db.Author.create(req.body);
  const author = {
    id: 1,
    name: "John Doe"
  }
  res.status(201).json(author);
};

export { getAuthors, createAuthor };
