const db = require("../models");
const bcrypt = require('bcrypt');


// Defining methods for thb.UsersController
module.exports = {
    findAll: function (req, res) {
        db.User.find(req.query)
            .sort({ date: -1 })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        const myPlaintextPassword = req.body.password
        db.User.findById(req.params.id)
            .then(dbUser => {
                return bcrypt.compare(myPlaintextPassword, dbUser.password)
            }).then(results => {
                if (results) {
                    return res.status(200).json({ msg: "Login success" })
                } else {
                    return res.status(401).json({ msg: "Invalid credential" })
                }
            })
            .catch(err => res.status(422).json(err));

    },
    create: function (req, res) {
        console.log("creating", req.body)
        const myPlaintextPassword = req.body.password

        bcrypt.hash(myPlaintextPassword, 10, function (err, hash) {
            if (err) console.error(err)
            console.log(`${myPlaintextPassword} hashes into ${hash}`)// Store hash in your password DB.
            const newUser = { ...req.body, password: hash }
            db.User.create(newUser)
                .then(dbUser => res.json(dbUser))
                .catch(err => {
                    console.log("createErr", err)
                    res.status(422).json(err);
                })
        });
    },
    update: function (req, res) {
        db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.User.findById({ _id: req.params.id })
            .then(dbUser => dbUser
                .remove())
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },

    loginUser: function (req, res) {
        const myPlaintextPassword = req.body.password
        db.User.findOne({ email: req.body.email })
            .then(dbUser => {
                return bcrypt.compare(myPlaintextPassword, dbUser.password)
            }).then(results => {
                if (results) {
                    return res.status(200).json({ msg: "Login success" })
                } else {
                    return res.status(401).json({ msg: "Invalid credential" })
                }
            })
            .catch(err => { res.status(422).json(err); console.log(err) });

    },
    getMatches: function (req, res) {
        let currUsers = [];
        let matchedUsers = [];
        // get curr user's info (email, coices)
        db.User.findOne({ email: req.body.email })
            .then(dbUser => {
                // save users choices 
                // console.log("Controllers Inside getMatches method",dbUser);

                let currUser = [{
                    id: dbUser.id,
                    pickedShows: dbUser.shows
                }
                ];
                return currUser;
            })
            .catch(err => { res.status(422).json(err); console.log(err) });
        
            // get all users (email, shows, gender prefrence, pic)
        db.User.findAll({id: dbUser.id, pickedShows: dbUser.shows })
            .then(dbUser => {
                 // save users
                // compare 
            })
            .catch(err => { res.status(422).json(err); console.log(err) });
       

        // return array of matches
        // return res.status(200).json({ matchedUsers:[]})
    }

}
// module.exports = controller