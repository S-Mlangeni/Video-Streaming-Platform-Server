const library = (req, res) => {
    res.send([
        {title: "an-american-pickle", path: "/movies/comedy/an-american-pickle.mp4", image: `${process.env.URL}/movies/comedy/an-american-pickle.jpg`},
        {title: "blessers", path: "/movies/comedy/blessers.mp4", image: `${process.env.URL}/movies/comedy/blessers.jpg`},
        {title: "kanarie", path: "/movies/comedy/kanarie.mp4", image: `${process.env.URL}/movies/comedy/kanarie.jpg`},
        {title: "the-banker", path: "/movies/comedy/the-banker.mp4", image: `${process.env.URL}/movies/comedy/the-banker.jpg`},
        {title: "the-king-of-staten-island", path: "/movies/comedy/the-king-of-staten-island.mp4", image: `${process.env.URL}/movies/comedy/the-king-of-staten-island.jpg`},
        

    ])
}

module.exports = {
    library
}