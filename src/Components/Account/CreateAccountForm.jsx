import React, { useState } from "react";
import "./CreateAccountForm.css";

const CreateAccountForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    // Reset form fields
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="account-signup">
      <div className="main123">
        <div className="container">
          <div className="upper-account-data">
            <div className="logo-account">
              <h2 className="account-logo">Sign Up</h2>
            </div>
            <div className="account-data">
              <h2>Account registration</h2>
              <p>Fill out the form carefully for registration</p>
            </div>
          </div>
          
        </div>
      </div>
      <hr className="line" />
      <div className="main-1234">
    <div className="center-content-123">
    <form onSubmit={handleSubmit}>
      <h2 className="create-acc">Create Account</h2>

      <div>
        <label htmlFor="name">Name:</label>
        <input className="qw-12"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
        className="qw-12"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
        className="qw-12"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="btn-acc-submit" type="submit">Create Account</button>
    </form>
    </div>
  </div>  
    </div>
  );
};

export default CreateAccountForm;
