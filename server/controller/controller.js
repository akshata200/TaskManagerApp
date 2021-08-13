const Userdb = require('../model/modelUser');
const Taskdb = require('../model/modelTask');
const bcrypt = require('bcryptjs');
const axios = require('axios');

exports.create = (req, res) => {
    const password = req.body.password;
    const cpassword = req.body.confirmPassword;
    if (password.length >= 7) {
        if (password === cpassword) {
            const userDetail = new Userdb({
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                confirmPassword: req.body.confirmPassword
            })
            // const user = await userDetail.save();
            userDetail.save()
                .then(data => {
                    res.status(201).render("welcome", {
                        email: req.body.email,
                        username: req.body.username
                    });
                }).catch(err => {
                    if (err.code == '11000') {
                        // res.status(400).send("Email address already exists");
                        res.status(400).render('add_user', {
                            alert: "Email address already exists"
                        });
                    }
                    res.status(400).render('add_user', {
                        alert: "All fields are required to be filled"
                    });
                })
        } else {
            // res.send("Passwords are not same");
            res.render('add_user', {
                alert: "Passwords are not same"
            });
        }
    } else {
        // res.send("Password must have minimum 7 characters");
        res.render('add_user', {
            alert: "Password must have minimum 7 characters"
        });
    }
}

exports.find = async (req, res) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        const user = await Userdb.findOne({
            email: email
        });
        const isMatch = await bcrypt.compare(password, user.password);
        if (user.name == name && isMatch) {
            res.status(200).render("welcome", {
                email: req.body.email,
                username: user.username,
                data: user.data
            });
        } else {
            res.render('login', {
                alert: "Invalid Details"
            })
        }

    } catch (err) {
        res.render('login', {
            alert: "Invalid Email"
        })
    }
}

exports.addTask = async (req, res) => {
    const task = await Taskdb.findOne({
        owner: req.body.owner,
        title: req.body.title.trim(),
        desc: req.body.desc.trim()
    });
    if (task == null) {
        const taskDetail = new Taskdb({
            owner: req.body.owner,
            title: req.body.title,
            desc: req.body.desc
        })
        taskDetail.save()
            .then(user => {
                const url1 = process.env.FETCH_TASKS_BY_EMAIL + `/api/users?email=${user.owner}`;
                axios.get(url1)
                    .then(response => {
                        res.render('addTask', {
                            email: req.body.owner,
                            alert: "Data Saved"
                        });
                    }).catch(err => {
                        console.log(err);
                        res.send(err);
                    })
            }).catch(err => {
                res.render('addTask', {
                    email: req.body.owner,
                    alert: "Please enter Title and Description"
                })
            })
    } else {
        const url1 = process.env.FETCH_TASKS_BY_EMAIL + `/api/users?email=${req.body.owner}`;
        axios.get(url1)
            .then(response => {
                res.render('addTask', {
                    email: req.body.owner,
                    alert: "Data Saved"
                });
            }).catch(err => {
                console.log(err);
                res.send(err);
            })
    }

}

exports.show = (req, res) => {
    Taskdb.find({
            owner: req.query.email
        })
        .then(task => {
            res.send(task)
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error occurred while while retriving user information"
            })
        })
}

exports.delete = (req, res) => {
    const id = req.params.id;
    Taskdb.findByIdAndDelete(id)
        .then(data => {
            res.send("User Successfully deleted")
        })
        .catch(err => {
            res.send(err);
        })
}