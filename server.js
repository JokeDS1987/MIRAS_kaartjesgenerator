const http = require('http');
const fs = require('fs');
const path = require('path');

const API_KEY = process.env.ANTHROPIC_API_KEY;
const PORT = process.env.PORT || 3000;

if (!API_KEY) {
  console.error('Fout: stel de omgevingsvariabele ANTHROPIC_API_KEY in voor je de server start.');
  console.error('Voorbeeld: ANTHROPIC_API_KEY=sk-ant-... node server.js');
  process.exit(1);
}

const server = http.createServer(async (req, res) => {
  // Statisch HTML-bestand serveren
  if (req.method === 'GET' && req.url === '/') {
    const filePath = path.join(__dirname, 'miras-kaartjesgenerator.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('Bestand niet gevonden');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    });
    return;
  }

  // API-route: genereer kaarttekst
  if (req.method === 'POST' && req.url === '/genereer') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
      try {
        const { prompt } = JSON.parse(body);

        if (!prompt) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ fout: 'Geen prompt ontvangen.' }));
          return;
        }

        // Roep de Anthropic API aan via de server
        const https = require('https');
        const payload = JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 1000,
          messages: [{ role: 'user', content: prompt }]
        });

        const options = {
          hostname: 'api.anthropic.com',
          path: '/v1/messages',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': API_KEY,
            'anthropic-version': '2023-06-01',
            'Content-Length': Buffer.byteLength(payload)
          }
        };

        const apiReq = https.request(options, (apiRes) => {
          let data = '';
          apiRes.on('data', chunk => { data += chunk; });
          apiRes.on('end', () => {
            try {
              const parsed = JSON.parse(data);
              const tekst = (parsed.content || []).map(i => i.text || '').join('');
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ tekst }));
            } catch (e) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ fout: 'Fout bij verwerken API-antwoord.' }));
            }
          });
        });

        apiReq.on('error', (e) => {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ fout: 'Verbinding met Anthropic API mislukt: ' + e.message }));
        });

        apiReq.write(payload);
        apiReq.end();

      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ fout: 'Ongeldig verzoek: ' + e.message }));
      }
    });
    return;
  }

  // Alle andere routes: 404
  res.writeHead(404);
  res.end('Niet gevonden');
});

server.listen(PORT, () => {
  console.log(`MIRAS Kaartjesgenerator draait op http://localhost:${PORT}`);
  console.log('Druk op Ctrl+C om te stoppen.');
});
