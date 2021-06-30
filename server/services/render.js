const axios = require('axios');
exports.login = (req, res) => {
    res.render('login', {
        alert: "good"
    })
};

exports.add_user = (req, res) => {
    res.render('add_user', {
        alert: "good"
    });
};
exports.welcome = (req, res) => {
    res.render('welcome');
};

exports.index = (req, res) => {
    const url1 = `http://localhost:3000/api/users?email=${req.query.email}`;
    axios.get(url1)
        .then(response => {
            res.render("index", {
                task: response.data,
                email: req.query.email
            });
        }).catch(err => {
            res.send(err);
        })
};

exports.addTask = (req, res) => {
    res.render('addTask', {
        email: req.query.email,
        alert: "good"
    })
};