import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Data, Data2, Data3 } from "../../Atom/Atom";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

// import { useNavigate } from 'react-router-dom';

function Login() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [newData, setNewData] = useRecoilState(Data);
  setNewData(false);
  const sub = useRecoilValue(Data2);
  const sub1 = useRecoilValue(Data3);
  let getData = JSON.parse(localStorage.getItem("dataCollective")); // local storage se array achuka
  console.log(getData, "i am from local"); // data ara hai
  // let navigate = useNavigate()
  // const routeChange = () => {
  //     let path = "/"
  //     navigate(path)
  // }

  const [username, setUsername] = useState("");
  const [uMessage, setUMessage] = useState("");

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message1, setMessage1] = useState("");

  // const userUserName = localStorage.getItem("username")
  //     ? localStorage.getItem("username") : "AdminBoy8"
  // const userPassword = localStorage.getItem("password")
  //     ? localStorage.getItem("password") : "Admin@1234567"

  const handleSubmit = (event) => {
    event.preventDefault();
    const newARR = getData.filter(
      (x) => x.username === username && x.password === password
    );
    console.log(newARR, "i am matched data from local storage");
    if (newARR.length === 0) {
      alert("user not found");
    } else {
      alert("you are logged in");
      setShow(true);
      setNewData(true);
      if (sub === true) {
        navigate("/activity");
      }
      if (sub1 === true) {
        navigate("/activity1");
      }
    }
    // if (username === userUserName && password === userPassword) {
    //     alert("Login successful!")
    // } else {
    //     alert("User not found!")
    // }
  };

  function loginButNotSUb() {
    setNewData(true);
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

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
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={handleUsername}
          required
        />
        <span style={{ color: "red" }}>{uMessage}</span>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
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
          className="SignUpButton"
          onClick={() => {
            Checkpassword();
            usernameValidation();
          }}
        >
          Login
        </button>
        <span style={{ color: "white" }} className="span-handle">
          {" "}
          Don't have an account?{" "}
          <Link
            style={{ color: "red" }}
            className="nav-link active"
            aria-current="page"
            to="/register"
          >
            Register
          </Link>{" "}
        </span>
      </form>
      {show ? (
        <p className="popup">
          NOW YOU CAN GET SUBSCRIBED TO OUR PREMIUM FEATURES <br />
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bolder",
              textShadow: "1px 1px black",
            }}
          >
            <button onClick={loginButNotSUb}>Home</button>
          </Link>
        </p>
      ) : (
        ""
      )}
    </>
  );
}

export default Login;
