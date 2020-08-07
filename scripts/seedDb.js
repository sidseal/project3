const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/user");

const UserSeed = [
    {
        email: "susan.lewis@example.com",
        password: "aggies",
        UserName: "Susan",
        age: 73,
        genderpreference: "female",
        img: "https://randomuser.me/api/portraits/thumb/women/5.jpg",
        shows: [
            "Shameless", "Indian MatchMaking ", "Avatar: The Last Airbender","Connected"
        ]
    }
]

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(UserSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });