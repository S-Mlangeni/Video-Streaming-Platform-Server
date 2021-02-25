const library = (req, res) => {
    res.send([
        {title: "5-fingers-of-marseilles", path: "/movies/action/vid/5-fingers-of-marseilles", image: `${process.env.URL}/movies/action/img/5-fingers-of-marseilles`},
        {title: "knuckle-city", path: "/movies/action/vid/knuckle-city", image: `${process.env.URL}/movies/action/img/knuckle-city`},
        {title: "moffie", path: "/movies/action/vid/moffie", image: `${process.env.URL}/movies/action/img/moffie`},
        {title: "run-hide-fight", path: "/movies/action/vid/run-hide-fight", image: `${process.env.URL}/movies/action/img/run-hide-fight`},
        {title: "the-hunt", path: "/movies/action/vid/the-hunt", image: `${process.env.URL}/movies/action/img/the-hunt`}
    ])
}

module.exports = {
    library
}