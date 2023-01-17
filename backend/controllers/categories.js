const db = require('../db.js');
const jwt = require('jsonwebtoken');

const getCategories = (req, res) => {
  const q = "SELECT * FROM categories";
  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(data);
  });
};

const addCategory = (req, res) => {
  const token = req.cookies.access_token;
  
  if (!token) return res.status(401).json("Not authenticated");
  
  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!",err);

    const q = "INSERT INTO categories(`CATEGORY`) VALUES (?)";

    const values = [
      req.body.category
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Post has been created.");
    });
  });
};

const deleteCategory = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const catId = req.params.id;
    const q = "DELETE FROM categories WHERE `id` = ?";

    db.query(q, [catId], (err, data) => {
      if (err) return res.status(403).json("You can delete only your post!");

      return res.json("Post has been deleted!");
    });
  });
};

const updateCategory = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const catId = req.params.id;
    const q =
      "UPDATE categories SET `CATEGORY`=? WHERE `id` = ?";

    const category = [req.body.category];
    //UNDER CONTRUCTION
    db.query(q, [category, catId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Cat has been updated.");
    });
  });
};

module.exports.getCategories = getCategories;
module.exports.addCategory = addCategory;
module.exports.deleteCategory = deleteCategory;
module.exports.updateCategory = updateCategory;