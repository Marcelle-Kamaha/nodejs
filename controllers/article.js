const Article = require("../models/Article");

exports.createArticle = (req, res, next) => {
  const article = new Article({
    title: req.body.title,
    categorie: req.body.categorie,
    auteur: req.body.auteur,
    userId: req.body.userId,
    description: req.body.description,
    contenu: req.body.contenu,
    date: req.body.date,
  });

  article
    .save()
    .then(() => {
      res.redirect("/articles");
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getOneArticle = (req, res, next) => {
  Article.findOne({
    _id: req.params.id,
  })
    .then((article) => {
      // res.status(200).json(article);
      res.render("oneNews", {
        article: article,
      });
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.getAllArticles = (req, res, next) => {
  Article.find()
    .then((articles) => {
      res.render("allNews", {
        articles: articles,
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getArticleById = (req, res, next) => {
  Article.findOne({
    _id: req.params.id,
  })
    .then((article) => {
      // res.status(200).json(article);
      res.render("modifyNews", {
        article: article,
      });
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};
exports.modifyArticle = (req, res, next) => {
  const article = ({
    _id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    auteur: req.body.auteur,
    categorie: req.body.categorie,
    userId: req.body.userId,
    contenu: req.body.contenu,
    date: req.body.date,
  });
  Article.updateOne({ _id: req.params.id }, article)
//  Article.updateOne({ _id: req.params.id }, {...req.body, _id: req.params.id})
    .then(() => {
      res.redirect("/articles");
      // res.status(201).json({
      //   message: "Article updated successfully!",
      // });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.deleteArticle = (req, res, next) => {
  Article.deleteOne({_id: req.params.id}).then(
    () => {
       req.flash('success_msg','supprimé avec succes')
       res.redirect('/articles')
    }
        
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

// exports.getNewArticle = (req, res) => {
//   res.render('addNews')
// }
