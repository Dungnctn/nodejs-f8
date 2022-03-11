const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require("express-handlebars");
const app = express();
const PORT = 3001;

const route = require('./routes')

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

// Routes init
route(app);
// req: ycau gửi lên, res: tùy chỉnh kết quả trả về




app.listen(PORT, () => console.log(`Server cua ban đang chạy cổng http:localhost:${PORT}`))



