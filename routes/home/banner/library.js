const library = (req, res) => {
    res.send([
        {tag: "series", title: "awkwafina-is-nora-from-queens", path: "/home/banner/awkwafina-is-nora-from-queens.mp4", image: `${process.env.URL}/home/banner/awkwafina-is-nora-from-queens.jpg`}
    ])
}

module.exports = {
    library
}