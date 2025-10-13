import { ok } from '../utils/response.js';
import { Router } from 'express';
const router = Router();

// TODO: implement per spec
router.get('/', (req, res) => {
  ok(res, { ok: true, message: 'API is running', at: new Date().toISOString() });
});

export default router;
