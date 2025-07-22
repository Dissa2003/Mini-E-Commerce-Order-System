const express = require('express');
const morgan = require('morgan');
const winston = require('winston');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const itemRoutes = require('./routes/item');
const app = express();
const PORT = process.env.PORT || 3000;

// Winston logger setup
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

app.use(morgan('combined', { stream: { write: msg => logger.info(msg.trim()) } }));
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/items', itemRoutes);

const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongo:27017/ecommerce';
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => logger.info('Connected to MongoDB'))
  .catch(err => logger.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Mini E-Commerce App is running!');
});

// Error handler
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
}); 