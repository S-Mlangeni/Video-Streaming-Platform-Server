const library = (req, res) => {
    res.send([
        {title: "awkwafina-is-nora-from-queens", path: "/series/comedy/vid/awkwafina-is-nora-from-queens", image: `${process.env.URL}/series/comedy/img/awkwafina-is-nora-from-queens`},
        {title: "dave", path: "/series/comedy/vid/dave", image: `${process.env.URL}/series/comedy/img/dave`},
        {title: "family-guy", path: "/series/comedy/vid/family-guy", image: `${process.env.URL}/series/comedy/img/family-guy`},
        {title: "grownish", path: "/series/comedy/vid/grownish", image: `${process.env.URL}/series/comedy/img/grownish`},
        {title: "high-fidelity", path: "/series/comedy/vid/high-fidelity", image: `${process.env.URL}/series/comedy/img/high-fidelity`},
        {title: "podcast-and-chill-with-mac-g", path: "/series/comedy/vid/podcast-and-chill-with-mac-g", image: `${process.env.URL}/series/comedy/img/podcast-and-chill-with-mac-g`},
        {title: "ramy", path: "/series/comedy/vid/ramy", image: `${process.env.URL}/series/comedy/img/ramy`},
        {title: "sadboiliftclub", path: "/series/comedy/vid/sadboiliftclub", image: `${process.env.URL}/series/comedy/img/sadboiliftclub`},
        {title: "the-real-mxo-&-uniey-dreams", path: "/series/comedy/vid/the-real-mxo-&-uniey-dreams", image: `${process.env.URL}/series/comedy/img/the-real-mxo-&-uniey-dreams`},
    ])
}

module.exports = {
    library
}