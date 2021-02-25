const library = (req, res) => {
    res.send([
        {title: "mr-robot", path: "/series/thriller/vid/mr-robot", image: `${process.env.URL}/series/thriller/img/mr-robot`},
        {title: "power-book-ii-ghost", path: "/series/thriller/vid/power-book-ii-ghost", image: `${process.env.URL}/series/thriller/img/power-book-ii-ghost`},
        {title: "trackers", path: "/series/thriller/vid/trackers", image: `${process.env.URL}/series/thriller/img/trackers`},
        {title: "wandavision", path: "/series/thriller/vid/wandavision", image: `${process.env.URL}/series/thriller/img/wandavision`},
        {title: "your-honor", path: "/series/thriller/vid/your-honor", image: `${process.env.URL}/series/thriller/img/your-honor`}
    ])
}

module.exports = {
    library
}