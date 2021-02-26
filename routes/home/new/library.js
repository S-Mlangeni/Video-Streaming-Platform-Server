const library = (req, res) => {
    res.send([
        {tag: "series", title: "bel-air", path: "/home/new/bel-air.mp4", image: `${process.env.URL}/home/new/bel-air.jpg`},
        {tag: "series", title: "grownish", path: "/home/new/grownish.mp4", image: `${process.env.URL}/home/new/grownish.jpg`},
        {tag: "movie", title: "high-fantasy", path: "/home/new/high-fantasy.mp4", image: `${process.env.URL}/home/new/high-fantasy.jpg`},
        {tag: "movie", title: "judas-and-the-black-messiah", path: "/home/new/judas-and-the-black-messiah.mp4", image: `${process.env.URL}/home/new/judas-and-the-black-messiah.jpg`},
        {tag: "movie", title: "knuckle-city", path: "/home/new/knuckle-city.mp4", image: `${process.env.URL}/home/new/knuckle-city.jpg`},
        {tag: "series", title: "podcast-and-chill-with-mac-g", path: "/home/new/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/home/new/podcast-and-chill-with-mac-g.jpg`}
    ])
}

module.exports = {
    library
}