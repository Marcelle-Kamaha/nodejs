const passport = require("passport");
 
module.exports = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    req.flash('error_msg', 'Pleace login first to access this page')
    res.redirect('/')
};