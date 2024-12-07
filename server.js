// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const itemRoutes = require('./routes/itemRoutes');

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Routes
// app.use('/api/items', itemRoutes);

// // MongoDB Connection
// mongoose
//   .connect('mongodb://localhost:27017/express-crud-db', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('MongoDB Connected'))
//   .catch((err) => console.log('Error: ', err));

// // Start Server
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
require('dotenv').config(); // Load environment variables

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/items', itemRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('Error: ', err));

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
