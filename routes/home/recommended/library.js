const library = (req, res) => {
    res.send([
        {tag: "series", title: "boity-own-your-throne", path: "/home/recommended/vid/boity-own-your-throne", image: `${process.env.URL}/home/recommended/img/boity-own-your-throne`},
        {tag: "series", title: "dave", path: "/home/recommended/vid/dave", image: `${process.env.URL}/home/recommended/img/dave`},
        {tag: "movie", title: "moffie", path: "/home/recommended/vid/moffie", image: `${process.env.URL}/home/recommended/img/moffie`},
        {tag: "movie", title: "queen-and-slim", path: "/home/recommended/vid/queen-and-slim", image: `${process.env.URL}/home/recommended/img/queen-and-slim`},
        {tag: "series", title: "sadboiliftclub", path: "/home/recommended/vid/sadboiliftclub", image: `${process.env.URL}/home/recommended/img/sadboiliftclub`},
        {tag: "movie", title: "the-banker", path: "/home/recommended/vid/the-banker", image: `${process.env.URL}/home/recommended/img/the-banker`},
        {tag: "series", title: "wandavision", path: "/home/recommended/vid/wandavision", image: `${process.env.URL}/home/recommended/img/wandavision`},
        {tag: "movie", title: "young-ahmed", path: "/home/recommended/vid/young-ahmed", image: `${process.env.URL}/home/recommended/img/young-ahmed`}
    ])
}

module.exports = {
    library
}