const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require("express-handlebars");
const app = express();
const PORT = 3001;

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Template engine
app.engine("hbs", engine({
    extname: '.hbs' //quy định đổi đuôi file handlebars -> hbs
}));
app.set('view engine', 'hbs'); //đặt cho express là view engine sdung handlebars ở engine handlebars
app.set('views', path.join(__dirname, 'resources/views'));

// req: ycau gửi lên, res: tùy chỉnh kết quả trả về
app.get("/", (req, res) => {
    res.render('home');
});

app.get("/news", (req, res) => {
    res.render('news');
});

app.get("/search", (req, res) => {
    // console.log(req.query);
    res.render('search');
});

app.post("/search", (req, res) => {
    // console.log(req.body);
    res.send('');
});

app.listen(PORT, () => console.log(`Server cua ban đang chạy cổng http:localhost:${PORT}`))



