const controller={
    login: (req,res)=>{
        console.log(req.body)
        const UserSeed = [
            {
                email: "susan.lewis@example.com",
                password: "aggies",
                UserName: "Susan",
                age: 73,
                genderpreference: "female",
                img: "https://randomuser.me/api/portraits/thumb/women/5.jpg",
                shows: []
        
            }
        ]
        res.json(UserSeed)
        //use the username to lookup record in databse
        //compare stored password with submited password
        //maybe use a cookie or sessionStoarage to store auth token --AUTHORIZATION
    }
}
module.exports= controller