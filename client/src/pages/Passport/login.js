import React, {useState}from "react";
import API from "../../utils/API"

function Login() {
    const [password, setPassword] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setPassword({...password, [name]: value})
    };

    function loadBooks() {
        API.getEntries()
          .then(res => 
            setPassword(res.data)
          )
          .catch(err => console.log(err));
      };


    function handleFormSubmit(event) {
        event.preventDefault();
        if (password.username && password.password) {
          API.saveEntry({
            header: password.username,
            entry: password.password,
            
          })
            .then(res => console.log(res))
            .then(res => loadBooks())
            
            .catch(err => console.log(err));
        }
      };
        
    return(
    <div><h1>Login</h1>
    username
    <input 
        onChange={handleInputChange}
        name="username"
    />
    <br/>

    password
    <input
        onChange={handleInputChange}
        name="password"/>
        <br/>
        <button
      disabled={!(password.username && password.password)}
      onClick={handleFormSubmit}>Submit</button>
    </div>
    )
    
    }
    export default Login