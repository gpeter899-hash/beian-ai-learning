const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "out");
const port = Number(process.env.PORT || 3000);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8"
};

function resolveFile(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0]).replace(/^\/+/, "");
  const requested = path.normalize(path.join(root, cleanPath || "index.html"));
  if (!requested.startsWith(root)) return null;
  if (fs.existsSync(requested) && fs.statSync(requested).isFile()) return requested;
  const asIndex = path.join(requested, "index.html");
  if (fs.existsSync(asIndex) && fs.statSync(asIndex).isFile()) return asIndex;
  return path.join(root, "index.html");
}

const server = http.createServer((req, res) => {
  const file = resolveFile(req.url || "/");
  if (!file || !fs.existsSync(file)) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }
  const ext = path.extname(file).toLowerCase();
  res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Beian AI Learning MVP is running at http://localhost:${port}`);
});
