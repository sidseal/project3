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
            db.User.findById(req.params.id)
                .then(dbUser => res.json(dbUser))
                .catch(err => res.status(422).json(err));
        },
        create: function (req, res) {
            console.log("creating", req.body)
            const myPlaintextPassword = req.body.password
            
            bcrypt.hash(myPlaintextPassword, 10, function(err, hash) {
                if(err)console.error(err)
                console.log(`${myPlaintextPassword} hashes into ${hash}`)// Store hash in your password DB.
                const newUser={...req.body, password: hash}
                db.User.create(newUser)
                    .then(dbUser    => res.json(dbUser))
                    .catch(err =>{
                        console.log("createErr", err)
                    res.status(422).json(err);
                    } )
            });
        },
        update: function (req, res) {
            db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
                .then(dbUser   => res.json(dbUser))
                .catch(err => res.status(422).json(err));
        },
        remove: function (req, res) {
            db.User.findById({ _id: req.params.id })
                .then(dbUser   => dbUser
                        .remove())
                .then(dbUser => res.json(dbUser))
                .catch(err => res.status(422).json(err));
        }
    };
// module.exports = controller