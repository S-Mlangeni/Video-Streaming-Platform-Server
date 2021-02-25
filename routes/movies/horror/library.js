const library = (req, res) => {
    res.send([
        {title: "bypass", path: "/movies/horror/vid/bypass", image: `${process.env.URL}/movies/horror/img/bypass`},
        {title: "high-fantasy", path: "/movies/horror/vid/high-fantasy", image: `${process.env.URL}/movies/horror/img/high-fantasy`},
        {title: "the-hunt", path: "/movies/horror/vid/the-hunt", image: `${process.env.URL}/movies/horror/img/the-hunt`},
    ])
}

module.exports = {
    library
}