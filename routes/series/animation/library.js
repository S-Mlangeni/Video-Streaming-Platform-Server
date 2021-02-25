const library = (req, res) => {
    res.send([
        {title: "family-guy", path: "/series/animation/vid/family-guy", image: `${process.env.URL}/series/animation/img/family-guy`},
        {title: "primal", path: "/series/animation/vid/primal", image: `${process.env.URL}/series/animation/img/primal`},
        {title: "solar-opposites", path: "/series/animation/vid/solar-opposites", image: `${process.env.URL}/series/animation/img/solar-opposites`}
    ])
}

module.exports = {
    library
}