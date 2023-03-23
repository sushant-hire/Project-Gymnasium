import React, { useState, useEffect } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Data } from "../../Atom/Atom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [message1, setMessage1] = useState("");
  const [uMessage, setUMessage] = useState("");

  const [data, setData] = useState([]);

  const [show, setShow] = useState(false);
  const [register, setRegister] = useRecoilState(Data);
  useEffect(() => {
    if (localStorage.getItem("dataCollective")) {
      let data = JSON.parse(localStorage.getItem("dataCollective"));
      setData(data);
    }
  }, []);

  const usernameValidation = () => {
    const reg = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
    if (username === "") {
      setUMessage("Enter Username");
    } else if (!reg.test(username)) {
      setUMessage(
        "Invalid username! Your username must contain alteast 1 capital letter, a number and should meet the 7 - 29 character length."
      );
    } else {
      setUMessage("");
    }
  };
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const dataCollective = {
      name: name,
      email: email,
      password: password,
      username: username,
      isSubScribe20: false,
      isSubScribe50: false,
    };
    data.push(dataCollective);
    setData([...data]);
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
      window.alert(`${name}, you have successfully registered!`);
      setRegister(true);
      setShow(true);
    }
    if (
      uMessage !==
        "Invalid username! Your username must contain alteast 1 capital letter, a number and should meet the 7 - 29 character length." &&
      message1 !==
        "Invalid password! Your password must contain at least 1 uppercase alphabet, 1 lowercase alphabet, number values between 0-9, 1 special character, and minimum 8 characters." &&
      message !==
        "Invalid email! Your email ID must contain all domain requirements."
    ) {
      localStorage.setItem("dataCollective", JSON.stringify(data));
    }
  };

  function Checkpassword() {
    const strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    if (!strongRegex.test(password) && password !== "") {
      setMessage1(
        "Invalid password! Your password must contain at least 1 uppercase alphabet, 1 lowercase alphabet, number values between 0-9, 1 special character, and minimum 8 characters."
      );
    } else if (password === "") {
      setMessage1("Enter Password");
    } else {
      setMessage1("");
    }
  }
  function Checkemail() {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (!regEx.test(email) && email !== "") {
      setMessage(
        "Invalid email! Your email ID must contain all domain requirements."
      );
    } else if (email === "") {
      setMessage("Enter Email");
    } else {
      setMessage("");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <input
          className="i1"
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsername}
          required
        />
        <span style={{ color: "red" }}>{uMessage}</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <span style={{ color: "red" }}>{message}</span>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <span style={{ color: "red" }}>{message1}</span>
        <br />
        <button
          className="ShowPasswordButton"
          type="button"
          onClick={toggleShowPassword}
        >
          {showPassword ? "Hide Password" : "Show Password"}
        </button>
        <button
          onClick={() => {
            Checkpassword();
            Checkemail();
            usernameValidation();
            handleSubmit();
          }}
          className="SignUpButton"
          type="submit"
        >
          Sign Up
        </button>
        <div className="CheckAccountDiv">
          <span style={{ color: "white" }} className="CheckAccountButton">
            {" "}
            Already have an account?{" "}
            <Link
              style={{ color: "red" }}
              className="nav-link active"
              aria-current="page"
              to="/login"
            >
              Login
            </Link>{" "}
          </span>
        </div>
      </form>
      {show ? (
        <p
          style={{ color: "white", textAlign: "center", margin: "10px" }}
          className="redirection"
        >
          Now You Can Go To <Link to="/">Home</Link> To Get Subscription
        </p>
      ) : (
        ""
      )}
    </>
  );
}

export default Register;
