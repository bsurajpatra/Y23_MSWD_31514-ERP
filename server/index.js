// index.js or server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const userRoutes = require('./routes/userRoutes.js');
const studentRoutes = require('./routes/studentRoutes.js');
const facultyRoutes = require('./routes/facultyRoutes.js');
const courseRoutes = require('./routes/courseRoutes.js');

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: "*"
}));
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/faculties', facultyRoutes);
app.use('/api/courses', courseRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});