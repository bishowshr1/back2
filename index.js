const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
mongoose.set('strictQuery', false);


mongoose.connect('mongodb+srv://shrestharahul223:moles700@cluster0.bwwo4ju.mongodb.net/Shopy').then((result) => {
  app.listen(5000);
}).catch((err) => {
  console.log(err);
})

app.use(cors());

app.use(morgan('dev'));
//app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRoutes);
app.use(productRoutes);

app.use((req, res) => {
  return res.status(404).json({
    message: 'not found'
  });
});