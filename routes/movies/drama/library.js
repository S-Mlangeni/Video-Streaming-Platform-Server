const library = (req, res) => {
    res.send([
        {title: "babyteeth", path: "/movies/drama/babyteeth.mp4", image: `${process.env.URL}/movies/drama/babyteeth.jpg`},
        {title: "i-am-not-a-witch", path: "/movies/drama/i-am-not-a-witch.mp4", image: `${process.env.URL}/movies/drama/i-am-not-a-witch.jpg`},
        {title: "moffie", path: "/movies/drama/moffie.mp4", image: `${process.env.URL}/movies/drama/moffie.jpg`},
        {title: "queen-and-slim", path: "/movies/drama/queen-and-slim.mp4", image: `${process.env.URL}/movies/drama/queen-and-slim.jpg`},
        {title: "rafiki", path: "/movies/drama/rafiki.mp4", image: `${process.env.URL}/movies/drama/rafiki.jpg`},
        {title: "waves", path: "/movies/drama/waves.mp4", image: `${process.env.URL}/movies/drama/waves.jpg`},
    ])
}

module.exports = {
    library
}