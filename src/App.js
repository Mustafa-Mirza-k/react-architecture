import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import socket from "./services/socket/index";
import { getAllUsers } from "./services/http";

function App() {
  useEffect(() => {
    socket.emitChanges({
      a: "a",
    });
    getAllUsers().then((res) => console.log(res));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
