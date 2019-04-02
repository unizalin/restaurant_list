const express = require('express');
const app = express();
const port = 3000;

const exphbs = require("express-handlebars");
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
//引入靜態檔案 js&css
app.use(express.static("public"));

//引入 json 
const restaurant = require('./restaurant.json');


app.get('/', (req, res) => {
  // res.send('test');
  res.render('index', { restaurants: restaurant.results });
});


app.listen(port, () => {
  console.log(`${port}`);
});