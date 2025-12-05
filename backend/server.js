const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// 1. Load Environment Variables
dotenv.config();

// 2. Connect to Database
// If this fails, the server will log an error but might still try to run.
connectDB();

const app = express();

// 3. Middleware
app.use(express.json()); // Allows server to read JSON body data
app.use(cors());         // Allows your Frontend to talk to this Backend

// --- ROUTES ---
// Hook up the Authentication and Chat routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/chat', require('./routes/chatRoutes'));
// --------------

// 4. Basic Route (To test if server is alive)
app.get('/', (req, res) => {
  res.send('🚀 PPStack Backend is Running Smoothly!');
});

// 5. Global Error Handler (Prevents server crashes)
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

// 6. Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`
  ################################################
  🚀 Server running on port ${PORT}
  👉 URL: http://localhost:${PORT}
  ################################################
  `);
});