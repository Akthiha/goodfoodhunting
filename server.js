const express = require("express")
const app = express()
const port = 8080
const session = require("express-session")

const logger = require("./middlewares/logger")
const methodOverride = require("./middlewares/method_override")
const dishController = require("./controllers/dish_controller")
const sessionController = require("./controllers/session_controller")

app.set("view engine", "ejs")

//--->---+
//       |
//       |
//    +----------------------+
//    | GET /css/style.css   |
//    | host: localhost:8080 |
//    +----------------------+
//       |
//    +----------------------+
//    | GET /share           |
//    | host: localhost:8080 |
//    +----------------------+
//       |
//    +---------------------------------------------------+
//    | POST /share_dish                                  |
//    | host: localhost:8080                              |
//    | title=chips&image_url=http://food.com/chips.jpg   |
//    +---------------------------------------------------+
//       |
//       | middleware callback function has a signature
app.use(logger)
//       |
app.use(express.static("public")) // routes for any static files inside public
//       |
// parses the raw request body and turn it into an object accessible at req.body
app.use(express.urlencoded({ extended: true })) // middleware to parse the request body
//       |
app.use(methodOverride)
//       |
// adds a session object to the request
/*
// datastructure to stores sessions for every unique user
// way to access the session for each unique user
// cookies attached to domains
req.session = {}

*/
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
)
//       |
app.use("/", dishController)

app.use("/", sessionController)
//       |
//       | none of the route matched - sending a 404 as a response back to client
//       |
// <-----+

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

/**
 *
 *
 * CRUD     database  http
 * create   insert    post
 * read     select    get
 * update   update    put/patch
 * destroy  delete    delete
 *
 *
 * HTTP is stateless
 *
 * MVC - model view controllers - separation of concerns
 * resources you're working with - dishes, users, comments, venues
 */