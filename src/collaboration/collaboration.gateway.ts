import { Injectable, OnModuleInit } from '@nestjs/common';
import * as http from 'http';
import * as WebSocket from 'ws';
import { setupWSConnection } from 'y-websocket/bin/utils';

@Injectable()
export class CollaborationGateway implements OnModuleInit {
  onModuleInit() {
    const server = http.createServer();
    const wss = new WebSocket.Server({ server });

    wss.on('connection', (ws, req) => {
      const docName = req.url?.slice(1).split('?')[0];
      console.log(`User connected to document: ${docName}`);
      setupWSConnection(ws, req, { docName });
    });

    const PORT = 1234;
    server.listen(PORT, () => {
      console.log(`Yjs WebSocket server started at ws://localhost:${PORT}`);
    });
  }
}
