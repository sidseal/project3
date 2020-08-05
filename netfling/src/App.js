import React from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./pages/login";
import './App.css';
import { StoreProvider } from "./utils/GlobalState";

function App() {
  return (
    <div className="App">
      <StoreProvider>
      <Header />
      <Login />
      <Footer />
      </StoreProvider>

    </div>
  );
}

export default App;
