import type { WebSocket } from 'ws';
import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import ws from 'vite-plugin-ws';

type SocketWithId = WebSocket & { id?: string };
const DEBUG = false;

const sockets = new Set<WebSocket>();

function log(msg: any) {
  if (!DEBUG)
    return;
  console.log(`Ws`, msg);
}

function getHtmlEntries(pagesDir: string) {
  const entries: Record<string, string> = {};

  // Read all files in the directory
  const files = fs.readdirSync(pagesDir);

  // Filter out HTML files
  const htmlFiles = files.filter(file => file.endsWith(`.html`));

  // Create entries for each HTML file
  htmlFiles.forEach((file) => {
    const name = path.basename(file, `.html`);
    entries[name] = path.resolve(pagesDir, file);
  });
  return entries;
}

function broadcast(message: object) {
  const str = JSON.stringify(message);
  sockets.forEach((socket) => {
    socket.send(str);
  });
}

export default defineConfig({
  build: {
    emptyOutDir: true,
    outDir: `../public`,
    rollupOptions: {
      input: getHtmlEntries(path.resolve(__dirname, `sketches`)),
    },
  },
  plugins: [
    ws({
      path: `/ws`,
      setup(wss) {
        wss.on(`connection`, (socket: WebSocket) => {
          const s = socket as SocketWithId;
          s.id = crypto.randomUUID();
          broadcast({ _event: `connected`, _socket: s.id });
          sockets.add(s);
          log(`Connected: ${s.id} (total: ${sockets.size})`);
          s.on(`message`, (message) => {
            try {
              const o = JSON.parse(message.toString());
              broadcast({ ...o, _socket: s.id });
            } catch (e) {
              console.error(`Error parsing message:`, e);
              console.log(message);
            }
          });
          s.on(`close`, () => {
            sockets.delete(s);
            log(`Disconnected: ${s.id} (total: ${sockets.size})`);
            broadcast({ _event: `disconnected`, _socket: s.id });
          });
        });
      },
    }),
  ],
});