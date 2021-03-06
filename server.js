const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const files = require("./routes/home/recommended/library");
const recommended = require("./routes/home/recommended/route");
const trending = require("./routes/home/trending/route");

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

const series_banner = require("./routes/series/banner/route");
const series_banner_library = require("./routes/series/banner/library");

const series_drama = require("./routes/series/drama/route");
const series_drama_library = require("./routes/series/drama/library");

const series_reality = require("./routes/series/reality/route");
const series_reality_library = require("./routes/series/reality/library");

const series_comedy = require("./routes/series/comedy/route");
const series_comedy_library = require("./routes/series/comedy/library");

const app = express();
app.listen(process.env.PORT, () => {
    console.log("Server is running!");
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", `${process.env.DOMAIN}`); // "*" allows all domains to access the server
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}); /* Middleware that allows different domains to access the server, thus eliminating cors error */

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

app.use("/series/banner", series_banner); 
app.use("/series/drama", series_drama); 
app.use("/series/reality", series_reality); 
app.use("/series/comedy", series_comedy);

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

app.get("/series-banner-api", series_banner_library.library);
app.get("/series-comedy-api", series_comedy_library.library);
app.get("/series-drama-api", series_drama_library.library);
app.get("/series-reality-api", series_reality_library.library);