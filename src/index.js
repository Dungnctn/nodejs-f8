const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3001;

app.use(morgan('combined'))

app.get("/", (req, res) => {
    return res.send("Hello world!");
})

app.listen(PORT, () => console.log(`Server cua ban đang chạy cổng http:localhost:${PORT}`))



