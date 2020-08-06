import React from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Login from "./pages/login";
import './App.css';
// import { StoreProvider } from "./utils/GlobalState";
import CreateProfile from './pages/createProfile';
// import Choices from './components/Choices';


function App() {
  return (
    <div className="App">
      <Header />
      <CreateProfile />
        {/* <Login /> */}
      <Footer />
    </div>
  );
}

export default App;
