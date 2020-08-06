const controller={
    login: (req,res)=>{
        console.log(req.body)
        //use the username to lookup record in databse
        //compare stored password with submited password
        //maybe use a cookie or sessionStoarage to store auth token --AUTHORIZATION
    }
}
module.exports= controller