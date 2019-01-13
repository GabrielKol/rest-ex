const express = require('express');
const router = express.Router();
const ProductsController = require('../controllers/products');

/*
const axios = require('axios');
router.get('/', (req, res, next) => {
  axios
    .get(`https://arbi-test.firebaseio.com/posts.json`)
    .then(r => {
      res.status(200).json({
        message: 'Handling GET requests to /products',
        posts: r.data
      });
    })
    .catch(e => {
      res.status(500).json({
        error: e
      });
    });
});*/
/*
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});
*/


/*
router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'Handling POST requests to /products'
  });
});

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;
  if (id === 'special') {
    res.status(200).json({
      message: 'You discovered the special ID',
      id: id
    });
  } else {
    res.status(200).json({
      message: 'You passed an ID'
    });
  }
});

router.patch('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Updated product!'
  });
});

router.delete('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Deleted product!'
  });
});*/


router.get("/", ProductsController.products_get_all);

router.post("/", ProductsController.products_create_product);

module.exports = router;
