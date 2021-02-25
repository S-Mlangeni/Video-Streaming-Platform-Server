const library = (req, res) => {
    res.send([
        {title: "sadboiliftclub", path: "/series/banner/vid/sadboiliftclub", image: `${process.env.URL}/series/banner/img/sadboiliftclub`}
    ])
}

module.exports = {
    library
}