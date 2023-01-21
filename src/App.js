import logo from "./logo.svg";
import "./App.css";
import HomeComponent from "./view/home";
import React from "react";
import Footer from "./shared/footer";


function App() {
  return (
    <React.Fragment>
      <HomeComponent />
      <Footer />
    </React.Fragment>
  );
}

export default App;
