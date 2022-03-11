class NewController {
  // [GET] => /news
  index(req, res) {
    res.render('news');
  }

  show(req, res) {
    res.send('Detail');
  }
}

// xuất đối tượng NewController ra ngoài bằng modules.exports
module.exports = new NewController();
