const library = (req, res) => {
    res.send([
        {title: "an-american-pickle", path: "/movies/comedy/vid/an-american-pickle", image: `${process.env.URL}/movies/comedy/img/an-american-pickle`},
        {title: "blessers", path: "/movies/comedy/vid/blessers", image: `${process.env.URL}/movies/comedy/img/blessers`},
        {title: "kanarie", path: "/movies/comedy/vid/kanarie", image: `${process.env.URL}/movies/comedy/img/kanarie`},
        {title: "the-banker", path: "/movies/comedy/vid/the-banker", image: `${process.env.URL}/movies/comedy/img/the-banker`},
        {title: "the-king-of-staten-island", path: "/movies/comedy/vid/the-king-of-staten-island", image: `${process.env.URL}/movies/comedy/img/the-king-of-staten-island`},
        

    ])
}

module.exports = {
    library
}