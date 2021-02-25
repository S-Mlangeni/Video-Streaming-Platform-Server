const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const files = require("./routes/home/recommended/library");
const recommended = require("./routes/home/recommended/route");
const trending = require("./routes/home/trending/route");
//const series = require("./routes/series/route");
//const movies = require("./routes/movies/route");

const home_banner = require("./routes/home/banner/route");
const home_banner_library = require("./routes/home/banner/library");

const home_new = require("./routes/home/new/route");
const home_new_library = require("./routes/home/new/library");

const home_recommended = require("./routes/home/recommended/route");
const home_recommended_library = require("./routes/home/recommended/library");

const home_trending = require("./routes/home/trending/route");
const home_trending_library = require("./routes/home/trending/library");

const movies_banner = require("./routes/movies/banner/route");
const movies_banner_library = require("./routes/movies/banner/library");

const movies_action = require("./routes/movies/action/route");
const movies_action_library = require("./routes/movies/action/library");

const movies_comedy = require("./routes/movies/comedy/route");
const movies_comedy_library = require("./routes/movies/comedy/library");

const movies_drama = require("./routes/movies/drama/route");
const movies_drama_library = require("./routes/movies/drama/library");

const movies_horror = require("./routes/movies/horror/route");
const movies_horror_library = require("./routes/movies/horror/library");

const series_banner = require("./routes/series/banner/route");
const series_banner_library = require("./routes/series/banner/library");

const series_action = require("./routes/series/action/route");
const series_action_library = require("./routes/series/action/library");

const series_animation = require("./routes/series/animation/route");
const series_animation_library = require("./routes/series/animation/library");

const series_comedy = require("./routes/series/comedy/route");
const series_comedy_library = require("./routes/series/comedy/library");

const series_documentaries = require("./routes/series/documentaries/route");
const series_documentaries_library = require("./routes/series/documentaries/library");

const app = express();
app.listen(process.env.PORT, () => {
    console.log("Server is running!");
});

app.use(cors()); /* Middleware that activates the "cors" function to allow the client-side
.js file to access the server side. Otherwise, file will be denied access to the server side
by the browser. */ 
app.use("/home/recommended", recommended); /* Middleware for the "recommended" routes */
app.use("/trending", trending); /* Middleware for the "trending" routes */

app.use("/home/banner", home_banner); /* Middleware for the "trending" routes */
app.use("/home/new", home_new); /* Middleware for the "trending" routes */
app.use("/home/recommended", home_recommended); /* Middleware for the "trending" routes */
app.use("/home/trending", home_trending); /* Middleware for the "trending" routes */

app.use("/movies/banner", movies_banner); 
app.use("/movies/action", movies_action); 
app.use("/movies/comedy", movies_comedy); 
app.use("/movies/drama", movies_drama); 
app.use("/movies/horror", movies_horror); 

app.use("/series/banner", series_banner); 
app.use("/series/action", series_action); 
app.use("/series/animation", series_animation); 
app.use("/series/comedy", series_comedy);
app.use("/series/documentaries", series_documentaries);

//app.use("/series", series); /* Middleware for the "series" routes */
//app.use("/movies", movies); /* Middleware for the "movies" routes */

app.get("/", (req, res) => {
    res.send("<h1>Hello Everyone!</h1>");
});

app.get("/api", files.library);

app.get("/home-banner-api", home_banner_library.library);
app.get("/home-new-api", home_new_library.library);
app.get("/home-recommended-api", home_recommended_library.library);
app.get("/home-trending-api", home_trending_library.library);

app.get("/movies-banner-api", movies_banner_library.library);
app.get("/movies-action-api", movies_action_library.library);
app.get("/movies-comedy-api", movies_comedy_library.library);
app.get("/movies-drama-api", movies_drama_library.library);
app.get("/movies-horror-api", movies_horror_library.library);

app.get("/series-banner-api", series_banner_library.library);
app.get("/series-action-api", series_action_library.library);
app.get("/series-animation-api", series_animation_library.library);
app.get("/series-comedy-api", series_comedy_library.library);
app.get("/series-documentaries-api", series_documentaries_library.library);