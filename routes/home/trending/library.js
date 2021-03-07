const library = (req, res) => {
    res.send([
        {tag: "movie", title: "blessers", path: "/home/trending/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/home/trending/blessers.jpg`},
        {tag: "series", title: "defining-love", path: "/home/trending/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/home/trending/defining-love.jpg`},
        {tag: "series", title: "primal", path: "/home/trending/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/home/trending/primal.jpg`},
        {tag: "series", title: "ramy", path: "/home/trending/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/home/trending/ramy.jpg`},
        {tag: "movie", title: "the-hunt", path: "/home/trending/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/home/trending/the-hunt.jpg`},
        {tag: "movie", title: "the-photograph", path: "/home/trending/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/home/trending/the-photograph.jpg`}
    ])
}

module.exports = {
    library
}