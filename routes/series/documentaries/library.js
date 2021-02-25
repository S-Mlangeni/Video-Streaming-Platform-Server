const library = (req, res) => {
    res.send([
        {title: "all-or-nothing-manchester-city", path: "/series/documentaries/vid/all-or-nothing-manchester-city", image: `${process.env.URL}/series/documentaries/img/all-or-nothing-manchester-city`},
        {title: "genius-aretha", path: "/series/documentaries/vid/genius-aretha", image: `${process.env.URL}/series/documentaries/img/genius-aretha`}
    ])
}

module.exports = {
    library
}