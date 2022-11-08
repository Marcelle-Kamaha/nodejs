const bcrypt = require ('bcrypt')
const User = require ('../models/User')
const jwt = require('jsonwebtoken');
const passport = require("passport")

// exports.signup = (req, res, next) => {
//   User.findOne({ email: req.body.email })
// .then(user => {
//   if (user) {
//       console.log("ERROR: A user already exists with this email address or this phone number!");
//       return res.redirect('/signup')
//   }
//   else {
//       // user registration
//       let newUser = {
//           email: req.body.email.toLowerCase(),
          
//       };
//       User.register(newUser, req.body.password, async (err, user) => {
//           if (err) {
//               console.log("ERROR: User not created!");
//               return res.redirect('/signup')
//           }
//           console.log("Creating user...");
//           passport.authenticate('local')(req, res, async () => {
//               console.log("User created");
//               // const link = "http://" + req.headers.host + "/api/activate-account/" + user.token;
//               console.log("User created successfully!");
//               console.log("CREATED USER: ", user);
//               return res.status(200).json({
//                   type: "success",
//                   message: "Utilisateur créé avec succès !",
//                   user: user
//               });
//           });
//       });
//   }
// })
// .catch(err => {
//   console.log("Error: ", err);
//   return res.status(500).json({ Error: "Getting an error! ", err });
// })};





exports.signup = (req, res, next) => {
let {email,password}=req.body;

let userData ={
    email : email
};
User.register(userData, password, (err,user)=>{
    if(err){
        req.flash('error_msg', 'ERROR:' + err)
        res.redirect('/signup')
    }
    passport.authenticate('local')(req,res,()=>{
        req.flash('succes_msg','compte cree avec succes!')
        res.redirect('/home')
    })
})
}




      // .then(hash => {
      //   const user = new User({
      //     email: req.body.email,
      //     password: hash
      //   });
      //   user.save()
      //     .then(() => {
      //       res.redirect('/home')
            //   res.status(201).json({ message: 'Utilisateur créé !' }))
  //       })
  //         .catch(error => res.status(400).json({ error }));
         
  //     })
  //     .catch(error => res.status(500).json({ error }));
  // };






//   exports.login = (req, res, next) => {
//     User.findOne({ email: req.body.email })
//         .then(user => {
//             if (!user) {
//                 return res.status(401).json({ error: 'Utilisateur non trouvé !' });
//             }
//             bcrypt.compare(req.body.password, user.password)
//                 .then(valid => {
//                     if (!valid) {
//                         return res.status(401).json({ error: 'Mot de passe incorrect !' });
//                     }

                    // res.status(200).json({
                    //     userId: user._id,
                    //     token: jwt.sign(
                    //         { userId: user._id },
                    //         'RANDOM_TOKEN_SECRET',
                    //         { expiresIn: '24h' }
                    //     )
                    // });

    //             {res.redirect('/home')}
    //             })
    //             .catch(error => res.status(500).json({ error }));
                
    //     })
    //     .catch(error => res.status(500).json({ error }));
    // }




    exports.login =  (passport.authenticate('local', {
        successRedirect:'/home',
        failureRedirect:'/'
            
    }));


