const db = require('../db.js');
const jwt = require('jsonwebtoken');

const getMovies = (req, res) => {
  const subQuery = `SELECT * FROM movies where CATEGORY = "${req.query.cat}" ORDER BY id DESC`;
  const q = req.query.count
  ? `${subQuery} LIMIT ${req.query.count}`
  : `${subQuery}`;

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(data);
  });
};

const getMovie = (req, res) => {
  const q = "SELECT m.id, `username`,`MOVIENAME`, `DESCRIPTION`, `DOWNLOADLINK`, `POSTER`, `YOUTUBELINK`, `CATEGORY` FROM users u JOIN movies m ON u.id = m.uid WHERE m.id = ?";

    const values = [
      req.params.id
    ];

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    
    return res.status(200).json(data[0]);
  });
};

const addMovie = (req, res) => {
  const token = req.cookies.access_token;
  
  if (!token) return res.status(401).json("Not authenticated");
  
  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!",err);

    const q =
      "INSERT INTO movies(`MOVIENAME`, `DESCRIPTION`, `DOWNLOADLINK`, `POSTER`,`DATE`, `YOUTUBELINK`,`CATEGORY`,`uid`) VALUES (?)";

    const values = [
      req.body.movieName,
      req.body.description,
      req.body.downloadLink,
      req.body.img,
      req.body.date,
      req.body.youtubeLink,
      req.body.category,
      userInfo.id
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Post has been created.");
    });
  });
};

const deleteMovie = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const movieId = req.params.id;
    const q = "DELETE FROM movies WHERE `id` = ? AND `uid` = ?";

    db.query(q, [movieId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json("You can delete only your post!");

      return res.json("Post has been deleted!");
    });
  });
};

const updateMovie = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const postId = req.params.id;
    const q =
      "UPDATE movies SET `MOVIENAME`=?,`DESCRIPTION`=?,`DOWNLOADLINK`=?,`POSTER`=?,`YOUTUBELINK`=?, `CATEGORY`=? WHERE `id` = ? AND `UID` = ?";

    const values = [
      req.body.movieName,
      req.body.description,
      req.body.downloadLink,
      req.body.img,
      req.body.youtubeLink,
      req.body.category
    ];
    //UNDER CONTRUCTION
    db.query(q, [...values, postId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Post has been updated.");
    });
  });
};

module.exports.getMovies = getMovies;
module.exports.getMovie = getMovie;
module.exports.addMovie = addMovie;
module.exports.deleteMovie = deleteMovie;
module.exports.updateMovie = updateMovie;