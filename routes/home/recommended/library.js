const library = (req, res) => {
    res.send([
        {tag: "series", title: "boity-own-your-throne", path: "/home/recommended/boity-own-your-throne.mp4", image: `${process.env.URL}/home/recommended/boity-own-your-throne.jpg`},
        {tag: "series", title: "dave", path: "/home/recommended/dave.mp4", image: `${process.env.URL}/home/recommended/dave.jpg`},
        {tag: "movie", title: "moffie", path: "/home/recommended/moffie.mp4", image: `${process.env.URL}/home/recommended/moffie.jpg`},
        {tag: "movie", title: "queen-and-slim", path: "/home/recommended/queen-and-slim.mp4", image: `${process.env.URL}/home/recommended/queen-and-slim.jpg`},
        {tag: "series", title: "sadboiliftclub", path: "/home/recommended/sadboiliftclub.mp4", image: `${process.env.URL}/home/recommended/sadboiliftclub.jpg`},
        {tag: "movie", title: "the-banker", path: "/home/recommended/the-banker.mp4", image: `${process.env.URL}/home/recommended/the-banker.jpg`}
    ])
}

module.exports = {
    library
}