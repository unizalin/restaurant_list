const express = require('express');
const app = express();
const port = 3000;

const exphbs = require("express-handlebars");
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
//引入靜態檔案 js&css
app.use(express.static("public"));

//引入 json 
const restaurantList = require('./restaurant.json');


app.get('/', (req, res) => {
  // res.send('test');
  //render 到指定的 handlebars 
  // console.log(restaurant)
  res.render('index', { restaurants: restaurantList.results });
});

app.get('/search', (req, res) => {
  console.log(req.query);
  const keyword = req.query.keyword;
  const restaurant = restaurantList.results.filter(store => { return store.name.toLowerCase().includes(keyword.toLowerCase()) });
  res.render('index', { restaurants: restaurant, keyword: keyword });
});

//show 頁面
app.get('/restaurants/:store_id', (req, res) => {
  // console.log(req.params.store_id);
  const store = restaurantList.results.filter(store => store.id == req.params.store_id);
  // console.log(typeof (store));
  // console.log(typeof (restaurant));
  // console.log(this)
  res.render('show', { restaurant: store[0] })
})


app.listen(port, () => {
  console.log(`${port}`);
});