const library = (req, res) => {
    res.send([
        {title: "awkwafina-is-nora-from-queens", path: "/series/comedy/awkwafina-is-nora-from-queens.mp4", image: `${process.env.URL}/series/comedy/awkwafina-is-nora-from-queens.jpg`},
        {title: "dave", path: "/series/comedy/dave.mp4", image: `${process.env.URL}/series/comedy/dave.jpg`},
        {title: "family-guy", path: "/series/comedy/family-guy.mp4", image: `${process.env.URL}/series/comedy/family-guy.jpg`},
        {title: "grownish", path: "/series/comedy/grownish.mp4", image: `${process.env.URL}/series/comedy/grownish.jpg`},
        {title: "high-fidelity", path: "/series/comedy/high-fidelity.mp4", image: `${process.env.URL}/series/comedy/high-fidelity.jpg`},
        {title: "podcast-and-chill-with-mac-g", path: "/series/comedy/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/series/comedy/podcast-and-chill-with-mac-g.jpg`}
    ])
}

module.exports = {
    library
}