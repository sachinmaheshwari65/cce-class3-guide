const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const MIME_TYPES = {
    '.html': 'text/html; charset=UTF-8',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf'
};

const server = http.createServer((req, res) => {
    // Resolve requested file path safely and prevent path traversal
    const requested = req.url === '/' ? '/index.html' : req.url.split('?')[0];
    // Remove leading slash so path.join doesn't treat it as an absolute path on Windows
    const relRequested = requested.replace(/^\\|^\//, '');
    let filePath = path.join(__dirname, relRequested);
    const resolved = path.resolve(filePath);
    const base = path.resolve(__dirname) + path.sep;

    // Security: deny requests that try to escape the project directory
    if (!resolved.startsWith(base)) {
        res.writeHead(403, {
            'Content-Type': 'text/plain; charset=UTF-8',
            'X-Content-Type-Options': 'nosniff',
            'X-Frame-Options': 'DENY',
            'Referrer-Policy': 'no-referrer-when-downgrade'
        });
        res.end('403 Forbidden');
        return;
    }

    const ext = path.extname(resolved).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(resolved, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, {
                    'Content-Type': 'text/html; charset=UTF-8',
                    'X-Content-Type-Options': 'nosniff',
                    'X-Frame-Options': 'DENY',
                    'Referrer-Policy': 'no-referrer-when-downgrade'
                });
                res.end('<h1>404 File Not Found</h1>', 'utf-8');
            } else {
                res.writeHead(500, {
                    'Content-Type': 'text/plain; charset=UTF-8',
                    'X-Content-Type-Options': 'nosniff',
                    'X-Frame-Options': 'DENY',
                    'Referrer-Policy': 'no-referrer-when-downgrade'
                });
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // Strong default security headers
            const headers = {
                'Content-Type': contentType,
                'X-Content-Type-Options': 'nosniff',
                'X-Frame-Options': 'DENY',
                'Referrer-Policy': 'no-referrer-when-downgrade',
                // Minimal CSP allowing fonts and CDNs used by the app
                'Content-Security-Policy': "default-src 'self'; img-src 'self' data: https:; script-src 'self' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com;"
            };

            res.writeHead(200, headers);
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, '127.0.0.1', () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`);
});
