// Require JSON for POST/PUT/PATCH requests (starter stub)
export function requireJson(req, res, next){
  if (['POST','PUT','PATCH'].includes(req.method)) {
    const ct = (req.headers['content-type'] || '').toLowerCase();
    if (!ct.startsWith('application/json')) {
      return res.status(415).json({
        code: 'UNSUPPORTED_MEDIA_TYPE',
        message: 'Content-Type must be application/json',
        traceId: req.headers['x-trace-id'] || 'trace:' + Math.random().toString(36).slice(2,10)
      });
    }
  }
  next();
}
