import http from 'http';
import app from './app.js';

const PORT = process.env.PORT || 5050;
const server = http.createServer(app);
server.listen(PORT, () => console.log(`Starter API listening on http://localhost:${PORT}`));
