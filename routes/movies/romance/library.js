const library = (req, res) => {
    res.send([
        {title: "queen-and-slim", path: "/movies/romance/vid/queen-and-slim", image: `${process.env.URL}/movies/romance/img/queen-and-slim`},
        {title: "rafiki", path: "/movies/romance/vid/rafiki", image: `${process.env.URL}/movies/romance/img/rafiki`},
        {title: "the-photograph", path: "/movies/romance/vid/the-photograph", image: `${process.env.URL}/movies/romance/img/the-photograph`},
        {title: "waves", path: "/movies/romance/vid/waves", image: `${process.env.URL}/movies/romance/img/waves`}
    ])
}

module.exports = {
    library
}