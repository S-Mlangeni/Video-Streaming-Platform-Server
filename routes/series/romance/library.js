const library = (req, res) => {
    res.send([
        {title: "defining-love", path: "/series/romance/vid/defining-love", image: `${process.env.URL}/series/romance/img/defining-love`},
        {title: "euphoria", path: "/series/romance/vid/euphoria", image: `${process.env.URL}/series/romance/img/euphoria`},
        {title: "grownish", path: "/series/romance/vid/grownish", image: `${process.env.URL}/series/romance/img/grownish`},
    ])
}

module.exports = {
    library
}