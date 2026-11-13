import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';

const port = Number(process.env.PORT ?? 3000);
const page = new URL('./index.html', import.meta.url);

createServer(async (request, response) => {
  if (request.method !== 'GET' || request.url?.split('?')[0] !== '/') {
    response.writeHead(404).end('Not found');
    return;
  }

  try {
    const html = await readFile(page);
    response.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store'
    }).end(html);
  } catch {
    response.writeHead(500).end('Preview is unavailable');
  }
}).listen(port, '127.0.0.1', () => {
  console.log(`FAQ プレビュー http://localhost:${port}`);
});
