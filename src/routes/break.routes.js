import { Router } from 'express';
const router = Router();
router.get('/', (req, res, next) => next(Object.assign(new Error('Boom!'), { status: 500 })));
export default router;
