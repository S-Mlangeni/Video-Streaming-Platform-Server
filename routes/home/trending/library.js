const library = (req, res) => {
    res.send([
        {tag: "movie", title: "blessers", path: "/home/trending/vid/blessers", image: `${process.env.URL}/home/trending/img/blessers`},
        {tag: "series", title: "defining-love", path: "/home/trending/vid/defining-love", image: `${process.env.URL}/home/trending/img/defining-love`},
        {tag: "series", title: "primal", path: "/home/trending/vid/primal", image: `${process.env.URL}/home/trending/img/primal`},
        {tag: "series", title: "ramy", path: "/home/trending/vid/ramy", image: `${process.env.URL}/home/trending/img/ramy`},
        {tag: "movie", title: "the-hunt", path: "/home/trending/vid/the-hunt", image: `${process.env.URL}/home/trending/img/the-hunt`},
        {tag: "movie", title: "the-photograph", path: "/home/trending/vid/the-photograph", image: `${process.env.URL}/home/trending/img/the-photograph`},
        {tag: "series", title: "the-real-mxo-&-uniey-dreams", path: "/home/trending/vid/the-real-mxo-&-uniey-dreams", image: `${process.env.URL}/home/trending/img/the-real-mxo-&-uniey-dreams`},
        {tag: "movie", title: "waves", path: "/home/trending/vid/waves", image: `${process.env.URL}/home/trending/img/waves`}
    ])
}

module.exports = {
    library
}