const express = require('express');
const authRoutes = require('./routes/auth.js');
const catRoutes = require('./routes/categories.js');
const movieRoutes = require('./routes/movies.js');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const app = express();

app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/upload");
  }, //cb(null, "../upload");
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

app.get("/test",(req,res)=>{
  return res.status(200).json("data");
})

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/auth", authRoutes);
app.use("/api/cat", catRoutes);
app.use("/api/getMovies", movieRoutes);

app.listen(8800, () => {
  console.log("I'm live on 8800 !");
});
