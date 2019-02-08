import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from "../../Routes";
import Header from "../../Components/NavBar/Navbar";


class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </div>
    );
  }
}

export default App;
