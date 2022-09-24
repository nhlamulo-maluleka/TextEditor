const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (_, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})