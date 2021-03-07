const library = (req, res) => {
    res.send([
        {title: "5-fingers-of-marseilles", path: "/movies/action/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/movies/action/5-fingers-of-marseilles.jpg`},
        {title: "knuckle-city", path: "/movies/action/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/movies/action/knuckle-city.jpg`},
        {title: "moffie", path: "/movies/action/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/movies/action/moffie.jpg`},
        {title: "run-hide-fight", path: "/movies/action/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/movies/action/run-hide-fight.jpg`},
        {title: "the-hunt", path: "/movies/action/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/movies/action/the-hunt.jpg`}
    ])
}

module.exports = {
    library
}