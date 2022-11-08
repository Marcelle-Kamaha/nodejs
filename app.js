const express = require('express');
const bodyparser = require ('body-parser');
const app = express();
const Thing = require('./models/thing');
const userRoutes = require('./routes/user');
const articleRoutes = require('./routes/article');
const expressLayouts = require("express-ejs-layouts");
const stuffRoutes = require('./routes/stuff');
const dashboardRoutes = require('./routes/dashboardRoute');
const path = require("path");
const passport = require('passport');
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const User = require ('./models/User');
const flash = require('connect-flash');

const mongoose = require ("mongoose");
mongoose.connect("mongodb://localhost:27017/Actuality",
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(bodyparser.json());

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  
app.use(expressLayouts);

app.set('view engine', 'ejs');
// app.use(dashboardRoutes.routes)
app.use(dashboardRoutes.routes)

app.use(
  session({
    secret: "go-fullstack",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy ({usernameField:'email'}, User.authenticate()));
// passport.use(
//   new LocalStrategy(
//     {
//       usernameField: "email",
//       passwordField: "password",
//       passReqToCallback: true,
//     },
    // function (req, email, password, done) {
    //   User.findOne({ email: email },
    //     function (err, user) {


            // console.log('USER FOUND:', user);
          // if (!user) {
          //   return done(null, false, { message: "Incorrect identifier" });
          // }


          /* if (!user.active) {
                        return done(null, false, {message: 'User is inactive'});
                    } */
//           user.authenticate(password, function (err, users, passwordError) {
//             if (passwordError) {
//               return done(null, false, { message: "Password is wrong" });
//             } else if (users) {
//               return done(null, users);
//             }
//           });
//         }
//       );
//     }
//   )
// );
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.use(express.static(path.join(__dirname,'public')))

// app.set('views', path.join(__dirname, 'views'));

 

  //app.use('/api/article', articleRoutes);
 
app.use(flash());
app.use ( (req,res,next)=>{
  res.locals.success_msg = req.flash(('success_msg'));
  res.locals.error_msg = req.flash(('error_msg'));
  next();
})

app.use(userRoutes);
app.use(articleRoutes.pass);
// app.use('/api/article',articleRoutes.pass);
//app.use(articleRoutes.pass);


module.exports = app;