const library = (req, res) => {
    res.send([
        {title: "all-or-nothing-manchester-city", path: "/series/documentaries/all-or-nothing-manchester-city.mp4", image: `${process.env.URL}/series/documentaries/all-or-nothing-manchester-city.jpg`},
        {title: "genius-aretha", path: "/series/documentaries/genius-aretha.mp4", image: `${process.env.URL}/series/documentaries/genius-aretha.jpg`}
    ])
}

module.exports = {
    library
}