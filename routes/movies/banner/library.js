const library = (req, res) => {
    res.send([
        {title: "knuckle-city", path: "/movies/banner/vid/knuckle-city", image: `${process.env.URL}/movies/banner/img/knuckle-city`}
    ])
}

module.exports = {
    library
}