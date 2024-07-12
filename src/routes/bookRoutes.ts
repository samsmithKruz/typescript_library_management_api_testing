import { Router } from 'express';
import { getBooks, createBook } from '../controllers/bookController.js';

const router = Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - authorId
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The title of the book
 *         authorId:
 *           type: integer
 *           description: The id of the author of the book
 *       example:
 *         id: 1
 *         title: Sampling
 *         authorId: 1
 */

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Returns a list of books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: The list of books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
router.get('/', getBooks);

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - authorId
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The title of the book
 *         authorId:
 *           type: integer
 *           description: The id of the author of the book
 *       example:
 *         id: 1
 *         title: Sampling
 *         authorId: 1
 */

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Creates a new book
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       201:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.post('/', createBook);

export default router;
