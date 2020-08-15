const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/user");

const UserSeed = [
    {
        email: "susan.lewis@example.com",
        password: "aggies",
        UserName: "Susan",
        age: 73,
        usersGender: "Female",
        usergenderPreference: "Male",
        img: "https://randomuser.me/api/portraits/thumb/women/5.jpg",
        shows: [
            "Shameless", "Indian MatchMaking ", "Avatar: The Last Airbender","Connected"
        ]
    },
    {
        email: "steve.perez@example.com",
        password: "weekend",
        UserName: "Steve",
        age: 30,
        usersGender: "Male",
        usergenderPreference: "Female",
        img: "https://randomuser.me/api/portraits/thumb/men/6.jpg",
        shows: [
            "Shameless", "The Umbrella Academy", "Pride & Prejudice","The Kissing Booth 2"
        ]
    },
    {
        email: "debbie.austin@example.com",
        password:  "march",
        UserName: "Debbie",
        age: 27,
        usersGender: "Female",
        usergenderPreference: "Female",
        img: "https://randomuser.me/api/portraits/thumb/women/44.jpg",
        shows: [
            "Shameless", "Love on the Spectrum","Immigration Nation","Connected"
        ]
    },
    {
        email:"madison.elliott@example.com",
        password: "water",
        UserName: "Madison",
        age: 73,
        usersGender: "Female",
        usergenderPreference: "Female",
        img: "https://randomuser.me/api/portraits/thumb/women/37.jpg",
        shows: [
            "Love on the Spectrum", "In The Dark", "The Last Dance","Private Practice"
        ]
    },
    {
        email:  "danielle.ramirez@example.com",
        password: "typhoon",
        UserName: "Danielle",
        age: 31,
        usersGender: "Female",
        usergenderPreference: "Male",
        img: "https://randomuser.me/api/portraits/thumb/women/46.jpg",
        shows: [
            "Eternal Sunshine of the Spotless Mind", "How do you Know","Desperados"
        ]
    },
    {
        email: "robert.fuller@example.com",
        password:  "paris1",
        UserName: "Robert",
        age: 29,
        usersGender: "Male",
        usergenderPreference: "Female",
        img: "https://randomuser.me/api/portraits/thumb/men/52.jpg",
        shows: [
            "Cursed",  "Hart of Dixie", "Eternal Sunshine of the Spotless Mind", "Community"
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
