// Unified error shape skeleton
export function errorHandler(err, req, res, next){
  const status = err.status || 500;
  const body = {
    code: err.code || (status === 500 ? 'INTERNAL_ERROR' : 'ERROR'),
    message: err.message || (status === 500 ? 'Internal Server Error' : 'Request failed'),
    details: err.details,
    errors: err.errors,
    traceId: req.headers['x-trace-id'] || 'trace:' + Math.random().toString(36).slice(2,10)
  };
  if (status === 500) console.error('Internal error:', err.stack || err);
  res.status(status).json(body);
}

export function notFound(req, res){
  res.status(404).json({
    code: 'NOT_FOUND',
    message: 'Not found',
    traceId: req.headers['x-trace-id'] || 'trace:' + Math.random().toString(36).slice(2,10)
  });
}
