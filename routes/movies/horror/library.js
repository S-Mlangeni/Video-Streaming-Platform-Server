const library = (req, res) => {
    res.send([
        {title: "bypass", path: "/movies/horror/bypass.mp4", image: `${process.env.URL}/movies/horror/bypass.jpg`},
        {title: "high-fantasy", path: "/movies/horror/high-fantasy.mp4", image: `${process.env.URL}/movies/horror/high-fantasy.jpg`},
        {title: "the-hunt", path: "/movies/horror/the-hunt.mp4", image: `${process.env.URL}/movies/horror/the-hunt.jpg`},
    ])
}

module.exports = {
    library
}