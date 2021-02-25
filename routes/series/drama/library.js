const library = (req, res) => {
    res.send([
        {title: "all-or-nothing-manchester-city", path: "/series/drama/vid/all-or-nothing-manchester-city", image: `${process.env.URL}/series/drama/img/all-or-nothing-manchester-city`},
        {title: "bel-air", path: "/series/drama/vid/bel-air", image: `${process.env.URL}/series/drama/img/bel-air`},
        {title: "euphoria", path: "/series/drama/vid/euphoria", image: `${process.env.URL}/series/drama/img/euphoria`},
        {title: "genius-aretha", path: "/series/drama/vid/genius-aretha", image: `${process.env.URL}/series/drama/img/genius-aretha`},
        {title: "high-fidelity", path: "/series/drama/vid/high-fidelity", image: `${process.env.URL}/series/drama/img/high-fidelity`},
        {title: "mr-robot", path: "/series/drama/vid/mr-robot", image: `${process.env.URL}/series/drama/img/mr-robot`},
        {title: "power-book-ii-ghost", path: "/series/drama/vid/power-book-ii-ghost", image: `${process.env.URL}/series/drama/img/power-book-ii-ghost`},
        {title: "primal", path: "/series/drama/vid/primal", image: `${process.env.URL}/series/drama/img/primal`},
        {title: "trackers", path: "/series/drama/vid/trackers", image: `${process.env.URL}/series/drama/img/trackers`},
        {title: "your-honor", path: "/series/drama/vid/your-honor", image: `${process.env.URL}/series/drama/img/your-honor`}
    ])
}

module.exports = {
    library
}