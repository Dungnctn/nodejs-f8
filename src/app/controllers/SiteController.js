
class SiteController {
    
    // [GET] => /news
    index(req, res) {
        res.render('home');
    }

    search(req, res) {
        res.render('search');
    }

}

// xuất đối tượng NewController ra ngoài bằng modules.exports
module.exports = new SiteController;