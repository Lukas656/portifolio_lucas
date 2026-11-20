import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, resolve, sep } from "node:path";

const root = resolve(process.cwd(), "out");
const port = Number(process.env.PORT ?? 3000);
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
};

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url ?? "/", "http://localhost");
    const pathname = decodeURIComponent(url.pathname);
    const requestedPath = pathname.endsWith("/") ? `${pathname}index.html` : pathname;
    const filePath = resolve(root, `.${requestedPath}`);

    if (filePath !== root && !filePath.startsWith(`${root}${sep}`)) {
      response.writeHead(403).end("Forbidden");
      return;
    }

    const fileInfo = await stat(filePath);
    if (!fileInfo.isFile()) {
      response.writeHead(404).end("Not found");
      return;
    }

    response.writeHead(200, {
      "Content-Length": fileInfo.size,
      "Content-Type": contentTypes[extname(filePath).toLowerCase()] ?? "application/octet-stream",
    });
    if (request.method === "HEAD") response.end();
    else createReadStream(filePath).pipe(response);
  } catch (error) {
    const status = error?.code === "ENOENT" ? 404 : 400;
    response.writeHead(status).end(status === 404 ? "Not found" : "Bad request");
  }
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Static export available on port ${port} from ${root}`);
});
