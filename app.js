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
  //render 到指定的 handlebars 
  console.log(restaurant)
  res.render('index', { restaurants: restaurant.results });
});

app.get('/restaurant/:store_id', (req, res) => {
  console.log(req.params.store_id)
  const store = restaurant.results.filter(store => store.id == req.params.store_id);
  console.log(typeof (store));
  console.log(typeof (restaurant));
  console.log(this)
  res.render('show', { restaurant: store[0] })
})


app.listen(port, () => {
  console.log(`${port}`);
});