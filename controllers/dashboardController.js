
const loginView = (req, res, next) => {
    res.render('pages/login',{layout:'pages/login'})
}

const signupView = (req, res, next) => {
     res.render('pages/signup',{layout:'pages/signup'})
 }

const addNewView = (req, res, next) => {
    res.render('addNews')
}

const indexView = (req, res, next) => {
    res.render('home')
    
}

 const allNewsView = (req,res,next) => {
     res.render('allNews')
 }

 const logoutView = (req,res,next)=>{
    req.layout();
    res.redirect('/login');
  }
 
module.exports = {
    indexView,
    addNewView,
    loginView,
    signupView,
    allNewsView,
    logoutView
}