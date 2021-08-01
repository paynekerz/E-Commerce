const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const data = await Category.findAll({
      include:[
        {model: Product}
      ]
    })
    res.json(data)
  }
  catch (err) {
    res.status(500).json(err);
}
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    Category.findOne({
      where: {id: req.params.id},
      include:[Product]
    })
    .then((data) => res.json(data))
  }
  catch(err){
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  try{
    Category.create(req.body)
    .then((data) => res.json(data))
  }
  catch(err){
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try{
    Category.update(req.body, {
      where: {id: req.params.id},
    })
    .then((data) => res.json(data))
  }
  catch(err){
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try{
    Category.destroy({
      where: {id: req.params.id}
    })
  }
  catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;
