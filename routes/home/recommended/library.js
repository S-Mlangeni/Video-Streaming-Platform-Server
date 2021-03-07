const library = (req, res) => {
    res.send([
        {tag: "series", title: "boity-own-your-throne", path: "/home/recommended/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/home/recommended/boity-own-your-throne.jpg`},
        {tag: "series", title: "dave", path: "/home/recommended/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/home/recommended/dave.jpg`},
        {tag: "movie", title: "moffie", path: "/home/recommended/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/home/recommended/moffie.jpg`},
        {tag: "movie", title: "queen-and-slim", path: "/home/recommended/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/home/recommended/queen-and-slim.jpg`},
        {tag: "series", title: "sadboiliftclub", path: "/home/recommended/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/home/recommended/sadboiliftclub.jpg`},
        {tag: "movie", title: "the-banker", path: "/home/recommended/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/home/recommended/the-banker.jpg`}
    ])
}

module.exports = {
    library
}