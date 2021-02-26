const library = (req, res) => {
    res.send([
        {title: "family-guy", path: "/series/animation/family-guy.mp4", image: `${process.env.URL}/series/animation/family-guy.jpg`},
        {title: "primal", path: "/series/animation/primal.mp4", image: `${process.env.URL}/series/animation/primal.jpg`},
        {title: "solar-opposites", path: "/series/animation/solar-opposites.mp4", image: `${process.env.URL}/series/animation/solar-opposites.jpg`}
    ])
}

module.exports = {
    library
}