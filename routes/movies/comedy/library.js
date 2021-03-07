const library = (req, res) => {
    res.send([
        {title: "an-american-pickle", path: "/movies/comedy/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/movies/comedy/an-american-pickle.jpg`},
        {title: "blessers", path: "/movies/comedy/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/movies/comedy/blessers.jpg`},
        {title: "kanarie", path: "/movies/comedy/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/movies/comedy/kanarie.jpg`},
        {title: "the-banker", path: "/movies/comedy/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/movies/comedy/the-banker.jpg`},
        {title: "the-king-of-staten-island", path: "/movies/comedy/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/movies/comedy/the-king-of-staten-island.jpg`},
        

    ])
}

module.exports = {
    library
}