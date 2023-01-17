const express = require('express');

const {updateMovie, getMovies ,addMovie ,deleteMovie ,getMovie} = require('../controllers/movie.js');

const router = express.Router();

router.get("/", function(req, res){getMovies(req, res)});
router.get("/:id/:seoLink", function(req, res){getMovie(req, res)});
router.post("/", function(req, res){addMovie(req,res)});
router.delete("/:id", function(req, res){deleteMovie(req, res)});
router.put("/:id", function(req, res){updateMovie(req, res)});

module.exports = router;
