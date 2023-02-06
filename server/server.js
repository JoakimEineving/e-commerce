const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const productsRouter = require("./routes/productsRoute");



dotenv.config();
const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

mongoose.set("strictQuery", true);
const uri = process.env.MONGO_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.use(express.json());
app.use('/products', productsRouter);

//https://dummyjson.com/products/search?q=phone&limit=3

// app.get("/products", (req, res) => {
//   res.json({
//     products: [
//       {
//         id: 1,
//         title: "iPhone 12",
//         price: 1000,
//         thumbnail: "https://dummyimage.com/400x300/000/fff",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       },
//       {
//         id: 2,
//         title: "iPhone 11",
//         price: 800,
//         thumbnail: "https://dummyimage.com/400x300/000/fff",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       },
//       {
//         id: 3,
//         title: "iPhone 10",
//         price: 700,
//         thumbnail: "https://dummyimage.com/400x300/000/fff",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       },
//     ],
//   });
// });

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
