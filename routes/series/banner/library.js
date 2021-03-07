const library = (req, res) => {
    res.send([
        {title: "sadboiliftclub", path: "/series/banner/podcast-and-chill-with-mac-g.mp4", image: `${process.env.URL}/series/banner/sadboiliftclub.jpg`}
    ])
}

module.exports = {
    library
}