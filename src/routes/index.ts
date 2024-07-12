import { Router } from 'express';
import authorRoutes from './authorRoutes.js';
import bookRoutes from './bookRoutes.js';

const router = Router();

router.use('/authors', authorRoutes);
router.use('/books', bookRoutes);

export default router;
