import axios from "axios";
// import { getMatches } from "../../../controllers/login";

export default {
    // Gets all users
    getUsers: function() {
      return axios.get("/api/users");
    },

    // Gets the user with the given id
    getUser: function(id) {
      return axios.get("/api/users/" + id);
    },

    // Deletes the user with the given id
    deleteUser: function(id) {
      return axios.delete("/api/users/" + id);
    },

    // Saves a user to the database
    saveUser: function(postUser) {
      return axios.post("/api/users", postUser);
    },

    loginUser: function({email,password}) {
      return axios.post("/api/users/login", { email,password}).then(
          // response => response.data
          response => console.log(response)
        )
    },
    
    getMatches: function(email) {
      return axios.post("/api/users/matches",{email}).then(
          response => response.data.matchedUsers
        )
    },

  };