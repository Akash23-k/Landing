import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="signup-form">
            <h2>Employee Registration Form</h2>
            <form className="reg-form">
                <div>
                    <label className="label-form">First Name:</label>
                    <input
                    type="text"
                    placeholder="Enter First Name"
                    />
                </div>
                <div>
                    <label className="label-form">Last Name:</label>
                    <input
                    type="text"
                    placeholder="Enter Last Name"
                    />
                </div>
                <div>
                    <label className="label-form">Password:</label>
                    <input
                    type="password"
                    placeholder="Enter Password"
                    />
                </div>
                <div>
                    <label className="label-form">Confirm Password:</label>
                    <input
                    type="password"
                    placeholder="Confirm Password"
                    />
                </div>
                <div>
                    <label className="label-form">Email Id:</label>
                    <input
                    type="text"
                    placeholder="Enter Email Id"
                    />
                </div><div>
                    <label className="label-form">Mobile No:</label>
                    <input
                    type="text"
                    placeholder="Enter Mobile No"
                    />
                </div>
            <button type="submit" className="reg-btn">Register</button>
                <div>
                <button className="hm-btn"><Link to='/' className="back-btn">Back</Link></button>
                </div>
            </form>
        </div>
    )
}
export default Signup;