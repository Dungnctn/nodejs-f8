const Course = require('../models/Course');
class SiteController {
  // [GET] => /news
  index(req, res) {

    Course.find({}, function (err, courses) {
      if(!err) {
        res.json(courses);
      }else{
        res.status(400).json({error: 'ERRORR!!'})
      }
    })
    // res.render('home');
  }

  search(req, res) {
    res.render('search');
  }
}

// xuất đối tượng NewController ra ngoài bằng modules.exports
module.exports = new SiteController();
