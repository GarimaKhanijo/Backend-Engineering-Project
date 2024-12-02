require('dotenv').config();

const express = require('express');
// const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
// app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const recipeRoutes = require('./routes/recipe');
const userRoutes = require('./routes/user');

app.use('/api/recipes', recipeRoutes);
app.use('/api/users', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


