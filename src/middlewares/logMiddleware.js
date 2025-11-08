export default function logMiddleware(req, res, next) {
  const data = new Date().toISOString();
  console.log(`[${data}] ${req.method} ${req.originalUrl}`);
  next();
}
