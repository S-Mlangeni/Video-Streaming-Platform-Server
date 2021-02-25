const library = (req, res) => {
    res.send([
        {title: "5-fingers-of-marseilles", path: "/movies/thriller/vid/5-fingers-of-marseilles", image: `${process.env.URL}/movies/thriller/img/5-fingers-of-marseilles`},
        {title: "escape-from-pretoria", path: "/movies/thriller/vid/escape-from-pretoria", image: `${process.env.URL}/movies/thriller/img/escape-from-pretoria`},
        {title: "run-hide-fight", path: "/movies/thriller/vid/run-hide-fight", image: `${process.env.URL}/movies/thriller/img/run-hide-fight`},
        {title: "shirley", path: "/movies/thriller/vid/shirley", image: `${process.env.URL}/movies/thriller/img/shirley`},
        {title: "the-hunt", path: "/movies/thriller/vid/the-hunt", image: `${process.env.URL}/movies/thriller/img/the-hunt`}   
    ])
}

module.exports = {
    library
}