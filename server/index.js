const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const topicRoutes = require('./routes/topics');
const postRoutes = require('./routes/blogPosts.routes');

const app = express();
app.use(express.json());

// Add cors middleware with specific origin
app.use(cors({
  origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
    }));
    app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use('/topics', topicRoutes);
app.use('/posts',postRoutes);
const CONNEXION_URL="mongodb+srv://blogapp:blogapp123@cluster0.booro0s.mongodb.net/blogdb?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNEXION_URL, {useNewUrlParser: true, useUnifiedTopology: true}) 
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => { console.log(error.message) });
