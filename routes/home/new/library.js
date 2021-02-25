const library = (req, res) => {
    res.send([
        {tag: "series", title: "bel-air", path: "/home/new/vid/bel-air", image: `${process.env.URL}/home/new/img/bel-air`},
        {tag: "series", title: "grownish", path: "/home/new/vid/grownish", image: `${process.env.URL}/home/new/img/grownish`},
        {tag: "movie", title: "high-fantasy", path: "/home/new/vid/high-fantasy", image: `${process.env.URL}/home/new/img/high-fantasy`},
        {tag: "movie", title: "judas-and-the-black-messiah", path: "/home/new/vid/judas-and-the-black-messiah", image: `${process.env.URL}/home/new/img/judas-and-the-black-messiah`},
        {tag: "movie", title: "knuckle-city", path: "/home/new/vid/knuckle-city", image: `${process.env.URL}/home/new/img/knuckle-city`},
        {tag: "series", title: "podcast-and-chill-with-mac-g", path: "/home/new/vid/podcast-and-chill-with-mac-g", image: `${process.env.URL}/home/new/img/podcast-and-chill-with-mac-g`}
    ])
}

module.exports = {
    library
}