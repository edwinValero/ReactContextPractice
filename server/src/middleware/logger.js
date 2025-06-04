function logger(req, res, next) {
  const timeStamp = new Date().toISOString();
  console.log(`[${timeStamp}] ${req.method} ${req.url}`);
  const initTime = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - initTime;
    console.log(`[${timeStamp}] Response: ${res.statusCode} - ${duration}ms`);
  });
  next();
}

module.exports = logger;
