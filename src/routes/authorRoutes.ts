import { Router, Request, Response } from 'express';
import Author  from '../models/author.js';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Author:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the author
 *         name:
 *           type: string
 *           description: The name of the author
 *       example:
 *         id: 1
 *         name: John Doe
 */

/**
 * @swagger
 * /authors:
 *   get:
 *     summary: Returns the list of all the authors
 *     tags: [Authors]
 *     responses:
 *       200:
 *         description: The list of the authors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Author'
 */
router.get('/', async (req: Request, res: Response) => {
//   const authors = await Author.findAll();
  const authors = [
    {id:1,name:"John Damn"}
  ];
  
  res.json(authors);
});

export default router;
