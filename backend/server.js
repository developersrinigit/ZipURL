const express = require('express');
const app = require('./src/app');
// const app = express();

// Use PORT from .env or default 5000
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});