const router = require('express').Router();
const { Category, Product } = require('../../models');
const { findAll } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
      const categoryData = await Category.findAll({
        include: [{model: Product}]
      });
       res.status(200).json(categoryData)
  } catch(err){
    res.status(500).json(err)
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try {
    const findCategoryid = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    });
    res.status(200).json(findCategoryid);
  } catch(err) {
    res.status(500).json(err)
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try {
      const newCategory = await Category.create({
        category_id: req.body.category_id,
      });
      res.status(200).json(newCategory);
  } catch(err) {
    res.status(500).json(err)
  }
  // create a new category
});

router.put('/:id', async (req, res) => {
  try {
    const updateCategoryById = await Category.update({
      where: {
        id: req.params.id
      }
    });

    if(!updateCategoryById[0]) {
      res.status(404).json({message: `Category with that id does not exist!`})
    }

    res.status(200).json(updateCategoryById)
  } catch(err) {
    res.status(500).json(err)
  }
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id,
      }
    });

    if(!deleteCategory[0]) {
      res.status(404).json({message: `Category with that id does not exist!`})
    }

    res.status(200).json(deleteCategory);
  } catch(err) {
    res.status(500).json(err)
  }
  // delete a category by its `id` value
});

module.exports = router;
