import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "./components/UserList";
import Loading from "./components/Loading";
import { useState, useEffect } from "react";
function App() {
  const [listOfUser, setlistOfUser] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((users) => setlistOfUser(users.data))
      .catch((err) => console.log("err", err));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {listOfUser ? <UserList listOfUser={listOfUser} /> : <Loading />}
      </header>
    </div>
  );
}

export default App;
