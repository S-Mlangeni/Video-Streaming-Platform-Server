const library = (req, res) => {
    res.send([
        {title: "boity-own-your-throne", path: "/series/reality/vid/boity-own-your-throne", image: `${process.env.URL}/series/reality/img/boity-own-your-throne`},
        {title: "podcast-and-chill-with-mac-g", path: "/series/reality/vid/podcast-and-chill-with-mac-g", image: `${process.env.URL}/series/reality/img/podcast-and-chill-with-mac-g`},
        {title: "sadboiliftclub", path: "/series/reality/vid/sadboiliftclub", image: `${process.env.URL}/series/reality/img/sadboiliftclub`},
        {title: "the-real-mxo-&-uniey-dreams", path: "/series/reality/vid/the-real-mxo-&-uniey-dreams", image: `${process.env.URL}/series/reality/img/the-real-mxo-&-uniey-dreams`},
        {title: "the-wooden-stool", path: "/series/reality/vid/the-wooden-stool", image: `${process.env.URL}/series/reality/img/the-wooden-stool`},
    ])
}

module.exports = {
    library
}