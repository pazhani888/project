const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Node.js API 🚀' });
});

// Optional health endpoint for container checks
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

// Echo endpoint
app.post('/echo', (req, res) => {
  res.json({ youSent: req.body });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
