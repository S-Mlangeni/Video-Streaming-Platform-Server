const library = (req, res) => {
    res.send([
        {title: "all-or-nothing-manchester-city", path: "/series/drama/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/series/drama/all-or-nothing-manchester-city.jpg`},
        {title: "bel-air", path: "/series/drama/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/series/drama/bel-air.jpg`},
        {title: "euphoria", path: "/series/drama/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/series/drama/euphoria.jpg`},
        {title: "genius-aretha", path: "/series/drama/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/series/drama/genius-aretha.jpg`},
        {title: "high-fidelity", path: "/series/drama/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/series/drama/high-fidelity.jpg`},
        {title: "mr-robot", path: "/series/drama/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/series/drama/mr-robot.jpg`},
    ])
}

module.exports = {
    library
}