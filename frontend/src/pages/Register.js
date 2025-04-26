import React from "react";

const Register = () => {
    return(
        <div>
            <div>
                <form>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder="Enter Username"/>
                    </div>
                    <div>
                        <label htmlFor="username">Password</label>
                        <input type="text" placeholder="Enter Password"/>
                    </div>
                    <button>Submit</button>
                </form>
                <div>
                    <p>Already have an account</p>
                    <a href="">Login</a>
                </div>
            </div>
        </div>
    );
}

export default Register;