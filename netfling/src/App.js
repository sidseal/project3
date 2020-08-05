import React from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./pages/login";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
