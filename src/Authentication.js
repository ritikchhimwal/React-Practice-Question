// create basic authentication page

import React, { useState } from "react";

const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users,setUsers] = useState([]);

  const handleAuthentication = () => {
    if(isRegistered){
        //Login
        if(isRegistered){
          const user = users.find((u) => u.email === email && u.password === password);
          if(user){
            setIsLoggedIn(true);
          }
          else{
            alert("Login failed check again!")
          }
        }
    }
    else{
        //Register
        const newUser = {email,password};
        setUsers([...users,newUser]);
        localStorage.setItem('users',JSON.stringify([...users,newUser]));
        setIsLoggedIn(true); 
    }
  }

  const handleLogut =()=>{
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  }
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome Home,{email}</h2>
          <button onClick={handleLogut}>LogOut</button>
        </div>
      ) : (
        <div>
            <h2>{isRegistered ? "Login" : "SignUp"}</h2>
          <form>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleAuthentication} >
                {isRegistered ? "Login" : "SignUp"}</button>
          </form>
          <p>
            {isRegistered
              ? "Dont have an account? Registered Now"
              : "Already have an account ? Log In"}
            
          </p>
          <button onClick={() => setIsRegistered(!isRegistered)}>
            {isRegistered ? "Sign Up" : "Log In"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Authentication;
