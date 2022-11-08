const express = require('express');
const router = express.Router();

 const auth = require('../middleware/auth');

const articleCtrl = require('../controllers/article');

// router.get('/', articleCtrl.getAllArticles);

router.get('/articles', auth, articleCtrl.getAllArticles)
// router.get('/newArticle', auth, articleCtrl.createArticle)
router.post('/addNews', auth, articleCtrl.createArticle);
// router.get('/article', articleCtrl.getOneArticle);
 router.get('/article/:id',  auth, articleCtrl.getOneArticle);

 router.get('/articlemod/:id', auth, articleCtrl.getArticleById);
 router.post('/articlen/:id',articleCtrl.modifyArticle);
//  router.put('/articlen/:id',articleCtrl.modifyArticle);

router.get('/sup/:id', auth, articleCtrl.deleteArticle);

// router.get('/allNews', articleCtrl.getOneArticle);
//  router.put('/allNews', articleCtrl.modifyArticle);
// router.delete('/allNews', articleCtrl.deleteArticle);

module.exports = {
    pass:router
}