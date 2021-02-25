const library = (req, res) => {
    res.send([
        {title: "power-book-ii-ghost", path: "/series/action/vid/power-book-ii-ghost", image: `${process.env.URL}/series/action/img/power-book-ii-ghost`},
        {title: "trackers", path: "/series/action/vid/trackers", image: `${process.env.URL}/series/action/img/trackers`},
        {title: "wandavision", path: "/series/action/vid/wandavision", image: `${process.env.URL}/series/action/img/wandavision`},
    ])
}

module.exports = {
    library
}