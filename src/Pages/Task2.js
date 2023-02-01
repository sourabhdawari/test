import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Task2() {
  //states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [names, setNames] = useState([]);

  //localStorage
  useEffect(() => {
    const storedNames = JSON.parse(localStorage.getItem("names"));
    if (storedNames) {
      setNames(storedNames);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("names", JSON.stringify(names));
  }, [names]);

  //formsubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    const newName = { firstName, lastName };
  const nameExists = names.find(name => name.firstName === firstName && name.lastName === lastName);
  if (!nameExists) {
    setNames([...names, newName]);
  }
  else{
    alert("Already exists")
  }
  setFirstName('');
  setLastName('');
  };

  return (
    <div className="App-header">
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            class="form-control"
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            class="form-control"
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button className="btn btn-primary m-4" type="submit">
          Submit
        </button>
      </form>


      <table class="table table-dark container w-50">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
          </tr>
        </thead>
        <tbody>
          {names.map((name, index) => (
            <tr key={index}>
              <td>{name.firstName}</td>
              <td>{name.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link className="btn btn-primary m-5" to="/">Home</Link>
    </div>
  );
}
