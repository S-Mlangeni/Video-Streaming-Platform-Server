const library = (req, res) => {
    res.send([
        {tag: "series", title: "awkwafina-is-nora-from-queens", path: "/home/banner/vid/awkwafina-is-nora-from-queens", image: `${process.env.URL}/home/banner/img/awkwafina-is-nora-from-queens`}
    ])
}

module.exports = {
    library
}