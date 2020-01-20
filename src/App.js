import React from "react";
// import logo from './logo.svg';
// import './App.css';
import Title from "./components/Title";

class App extends React.Component {
  render() {
    return (
      <div>
        <Title title="Hi There! Whats Up!" />
        <h3>Welcome to React World!</h3>
      </div>
    );
  }
}

export default App;
