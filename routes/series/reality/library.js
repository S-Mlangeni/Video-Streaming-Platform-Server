const library = (req, res) => {
    res.send([
        {title: "boity-own-your-throne", path: "/series/reality/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/series/reality/boity-own-your-throne.jpg`},
        {title: "podcast-and-chill-with-mac-g", path: "/series/reality/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/series/reality/podcast-and-chill-with-mac-g.jpg`},
        {title: "sadboiliftclub", path: "/series/reality/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/series/reality/sadboiliftclub.jpg`},
        {title: "the-real-mxo-&-uniey-dreams", path: "/series/reality/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/series/reality/the-real-mxo-&-uniey-dreams.jpg`},
        {title: "the-wooden-stool", path: "/series/reality/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/series/reality/the-wooden-stool.jpg`},
    ])
}

module.exports = {
    library
}