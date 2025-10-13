import { Router } from 'express';
import { ok } from '../utils/response.js';
import { requireJson } from '../middleware/requireJson.js';
const router = Router();

router.post('/', requireJson, (req, res) => ok(res, req.body));

export default router;
