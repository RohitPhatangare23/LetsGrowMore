import React, { useState } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import UserCard from "./components/UserCard";
import "./App.css";
import data from './data';
function App() {
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    setLoading(true);
    const res = data;
    setUsers(res);
    setLoading(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className="Navbar">
          <h1 className="Brand">LetsGrowMore</h1>
          <button onClick={getUsers}>Get Users</button>
        </nav>
      </header>
      <div className="user-container">
        {isLoading ? (
          <Backdrop open>
            <CircularProgress />
          </Backdrop>
        ) : null}

        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            first_name={user.first_name}
            last_name={user.last_name}
            user_info={user.user_info}
            email={user.email}
            avatar={user.avatar}
          />
        ))}
      </div>
    </div>
  );
}

export default App;