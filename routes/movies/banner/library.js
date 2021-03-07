const library = (req, res) => {
    res.send([
        {title: "knuckle-city", path: "/movies/banner/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/movies/banner/knuckle-city.jpg`}
    ])
}

module.exports = {
    library
}