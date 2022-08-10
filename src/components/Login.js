import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setnewEmail] = useState("");
  const [password, setnewPassword] = useState("");
  const [LoginStatus, setLoginStatus] = useState(false);
  
  const navigate = useNavigate();

const loginhandle = () => {
   if(email=='foo' && password=='bar'){
    setLoginStatus(true);
    localStorage.setItem("login",true);
    navigate("/home");
   }
};

 return (
    <div className="App">
      <div className="information">
     <label>UserName:</label>
        <input
          type="text"
          onChange={(event) => {
            setnewEmail(event.target.value);
          }}
        />
         <label>Password:</label>
        <input
          type="text"
          onChange={(event) => {
            setnewPassword(event.target.value);
          }}
        />
        <button onClick={loginhandle}>login</button>
      </div>
      
    </div>
  );
}

export default Login;
