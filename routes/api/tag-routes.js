const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const data = await Tag.findAll({
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

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    Tag.findOne({
      where: {id: req.params.id},
      include:[Product]
    })
    .then((data) => res.json(data))
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
  try{
    Tag.update(req.body)
    .then((data) => res.json(data))
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try{
    Tag.update({
      where: {id: req.params.id},
    })
    .then((data) => res.json(data))
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try{
    Tag.destroy({
      where: {id: req.params.id},
    })
    .then((data) => res.json(data))
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
