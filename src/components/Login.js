import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Login extends React.Component {
  state = {
    userName: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const userLogin = async () => {
      const response = await axios.get("http://localhost:5050/users");
      const userData = response.data;
      debugger;
      userData.map((data) => {
        if (data.userName === this.state.userName) {
          if (data.password === this.state.password) {
            console.log("login success");
          } else {
            console.log("invalid password");
          }
        } else {
          console.log("invalid username");
        }
        return data;
      });
    };
    userLogin();
  };

  render() {
    const { userName, password } = this.state;
    return (
      <div>
        <h2 className="title"> Welcome To Corporate Employee Page</h2>
        <div className="login-form">
          <h3 className="login-title">Employee Login</h3>
          <form className="login-field" onSubmit={this.handleSubmit}>
            <div>
              <label className="form-label">Username:</label>
              <input
                type="text"
                placeholder="Type your username"
                name="userName"
                value={userName}
                onChange={this.handleChange}
                className="input-box"
              />
            </div>
            <div>
              <label className="form-label">Password:</label>
              <input
                type="password"
                placeholder="Type your password"
                name="password"
                value={password}
                onChange={this.handleChange}
                className="input-box"
              />
            </div>
            <button type="submit" className="submit-btn">
              Login
            </button>
            <p>
              Don't have an account ? &nbsp;
              <Link to="/signup" className="signup-link">
                Signup
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
