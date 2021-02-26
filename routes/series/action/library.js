const library = (req, res) => {
    res.send([
        {title: "power-book-ii-ghost", path: "/series/action/power-book-ii-ghost.mp4", image: `${process.env.URL}/series/action/power-book-ii-ghost.jpg`},
        {title: "trackers", path: "/series/action/trackers.mp4", image: `${process.env.URL}/series/action/trackers.jpg`},
        {title: "wandavision", path: "/series/action/wandavision.mp4", image: `${process.env.URL}/series/action/wandavision.jpg`},
    ])
}

module.exports = {
    library
}