import express from 'express';
import { greet } from './greet';
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', (req, res, next) => {
  if (req.path === '/' && req.method !== 'GET') {
    return res.status(405).json({
      error: 'Method Not Allowed',
      message: `Method ${req.method} not allowed for this endpoint`,
      allowedMethods: ['GET'],
      status: 405
    });
  }
  next();
});

app.get('/', (req, res) => {
  res.send(greet());
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to see "hello world"`);
});

export default app;