import React from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import CreateProfile from './pages/createProfile';
// import Login from "./pages/login";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <CreateProfile />
      <Footer />
    </div>
  );
}

export default App;
