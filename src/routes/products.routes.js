import { Router } from 'express';
import { ok, created, noContent } from '../utils/response.js';
import { requireJson } from '../middleware/requireJson.js';
const router = Router();

// In-memory store (students implement full rules)
let nextId = 1;
let products = []; // {id,title,price}

// LIST (TODO: pagination/sorting/filtering)
router.get('/', (req, res) => {
  ok(res, { data: products, page: 1, perPage: products.length || 10, total: products.length });
});

// CREATE (TODO: validation + uniqueness)
router.post('/', requireJson, (req, res) => {
  created(res, { id: nextId++, ...req.body });
});

// UPDATE (PUT) (TODO: validation + uniqueness)
router.put('/:id', requireJson, (req, res) => {
  const id = Number(req.params.id);
  const item = products.find(p => p.id === id);
  if (!item) return res.status(404).json({ code:'NOT_FOUND', message:'Not found' });
  Object.assign(item, req.body);
  ok(res, item);
});

// DELETE
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const idx = products.findIndex(p => p.id === id);
  if (idx === -1) return res.status(404).json({ code:'NOT_FOUND', message:'Not found' });
  products.splice(idx, 1);
  noContent(res);
});

export default router;
