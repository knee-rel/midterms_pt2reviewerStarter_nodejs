import { Router } from 'express';
import { ok } from '../utils/response.js';
import { requireJson } from '../middleware/requireJson.js';
const router = Router();

// TODO: implement v1/v2 per spec (validation + tiers + totals)
router.post('/', requireJson, (req, res) => {
  ok(res, { message: 'Implement /api/v1/quote (v1/v2)' });
});

export default router;
