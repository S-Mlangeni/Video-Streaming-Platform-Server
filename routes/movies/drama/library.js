const library = (req, res) => {
    res.send([
        {title: "babyteeth", path: "/movies/drama/vid/babyteeth", image: `${process.env.URL}/movies/drama/img/babyteeth`},
        {title: "i-am-not-a-witch", path: "/movies/drama/vid/i-am-not-a-witch", image: `${process.env.URL}/movies/drama/img/i-am-not-a-witch`},
        {title: "moffie", path: "/movies/drama/vid/moffie", image: `${process.env.URL}/movies/drama/img/moffie`},
        {title: "queen-and-slim", path: "/movies/drama/vid/queen-and-slim", image: `${process.env.URL}/movies/drama/img/queen-and-slim`},
        {title: "rafiki", path: "/movies/drama/vid/rafiki", image: `${process.env.URL}/movies/drama/img/rafiki`},
        {title: "waves", path: "/movies/drama/vid/waves", image: `${process.env.URL}/movies/drama/img/waves`},
    ])
}

module.exports = {
    library
}