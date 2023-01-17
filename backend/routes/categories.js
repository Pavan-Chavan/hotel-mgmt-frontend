const express = require('express');

const {updateCategory, getCategories ,addCategory ,deleteCategory ,getCategory} = require('../controllers/categories.js');

const router = express.Router();

router.get("/", function(req, res){getCategories(req, res)});
router.get("/:id", function(req, res){getCategory(req, res)});
router.post("/", function(req, res){addCategories(req,res)});
router.delete("/:id", function(req, res){deleteCategory(req, res)});
router.put("/:id", function(req, res){updateCategory(req, res)});

module.exports = router;
