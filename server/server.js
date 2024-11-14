const express = require('express');
// const dotenv = require('dotenv');
const postRoutes = require('./src/modules/post/postRoutes');

// dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json()); // JSON 형식으로 요청 본문을 파싱

app.use('/api', postRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
