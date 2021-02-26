const library = (req, res) => {
    res.send([
        {title: "sadboiliftclub", path: "/series/banner/sadboiliftclub.mp4", image: `${process.env.URL}/series/banner/sadboiliftclub.jpg`}
    ])
}

module.exports = {
    library
}