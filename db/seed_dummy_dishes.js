
// connect to postgresql _ 
const { Client } = require("pg");

const db = new Client({
  database: "goodfoodhunting",
});

// array that i want to install
const dishNames = [
  "Arepas",
  "Barbecue Ribs",
  "Bruschette with Tomato",
  "Bunny Chow",
  "Caesar Salad",
  "California Maki",
  "Caprese Salad",
  "Cauliflower Penne",
  "Cheeseburger",
  "Chicken Fajitas",
  "Chicken Milanese",
  "Chicken Parm",
  "Chicken Wings",
  "Chilli con Carne",
  "Ebiten maki",
  "Fettuccine Alfredo",
  "Fish and Chips",
  "French Fries",
  "Sausages",
  "French Toast",
  "Hummus",
  "Katsu Curry",
  "Kebab",
  "Lasagne",
  "Linguine with Clams",
  "Massaman Curry",
  "Meatballs with Sauce",
  "Mushroom Risotto",
  "Pappardelle alla Bolognese",
  "Pasta Carbonara",
  "Pasta and Beans",
  "Pasta with Tomato and Basil",
  "Peking Duck",
  "Philadelphia Maki",
  "Pho",
  "Pierogi",
  "Pizza",
  "Poke",
  "Pork Belly Buns",
  "Pork Sausage Roll",
  "Poutine",
  "Ricotta Stuffed Ravioli",
  "Risotto with Seafood",
  "Salmon Nigiri",
  "Scotch Eggs",
  "Seafood Paella",
  "Som Tam",
  "Souvlaki",
  "Stinky Tofu",
  "Sushi",
  "Tacos",
  "Teriyaki Chicken Donburi",
  "Tiramisù",
  "Tuna Sashimi",
  "Vegetable Soup",
];

// image generator
const placeholderImageUrls = [
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/200",
  "https://via.placeholder.com/250",
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/350",
  "https://via.placeholder.com/400",
  "https://via.placeholder.com/450",
  "https://via.placeholder.com/500",
];

db.connect();
// for loop iteration
for (let i = 0; i < 20; i++) {
// define name
  const name = dishNames[Math.floor(Math.random() * dishNames.length)];

// generate imageUrl
  const imageUrl =
    placeholderImageUrls[Math.floor(Math.random() * placeholderImageUrls.length)];
// inserting in the database 
  const sql = `
    INSERT INTO dishes (name, image_url)
    VALUES ('${name}', '${imageUrl}');
  `;
  // spitting out error message
  db.query(sql, (err, dbRes) => {
    if (err) {
      console.error(err);
    }
  });
}

db.end();
