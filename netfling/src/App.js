import React, {useState} from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./pages/login";
import './App.css';

function App() {
  // Current User
  const [loggedUser, setLoggedUser] = useState(
    {
      _id: 0,
      email: "",
      password: "",
    }
  );

  return (
    <div className="App">
     
      <Header />
      <Login setLoggedUser={setLoggedUser} loggedUser={loggedUser}/>
      <Footer />
   

    </div>
  );
}

export default App;
