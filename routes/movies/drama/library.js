const library = (req, res) => {
    res.send([
        {title: "babyteeth", path: "/movies/drama/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/movies/drama/babyteeth.jpg`},
        {title: "i-am-not-a-witch", path: "/movies/drama/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/movies/drama/i-am-not-a-witch.jpg`},
        {title: "moffie", path: "/movies/drama/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/movies/drama/moffie.jpg`},
        {title: "queen-and-slim", path: "/movies/drama/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/movies/drama/queen-and-slim.jpg`},
        {title: "rafiki", path: "/movies/drama/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/movies/drama/rafiki.jpg`},
        {title: "waves", path: "/movies/drama/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/movies/drama/waves.jpg`},
    ])
}

module.exports = {
    library
}