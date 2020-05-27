import React, {useState} from 'react';
import './Auth.css';

// allows users to signup and login
const Auth = (props) => { 

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(true);

// take login text when logging in and signup when signing up
    const title = () => {
        return login ? 'Login' : 'Signup' // if login is true show login : else, signup
    }


    const loginToggle = (event) => { 
        event.preventDefault();

        setLogin(!login); // toggles between true and false when button is clicked VVV see below

        setEmail(''); // returning an empty string
        setPassword('');
        setFirstName('');
        setLastName('');
    }

// signup
    const signupFields = () => !login ? // looking for if login is not true
        (
            <div>
                <label htmlFor="firstName">First Name</label>
                <br />
                <input type='text' id='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <br />
                <label htmlFor='lastName'>Last Name</label>
                <br />
                <input type='text' id='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
        ) : null

    return(
        <div>
            <form>
                <h1>{title()}</h1>
                {signupFields()}
                <label htmlFor='email'>Email:</label>
                <br/>
                <input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label htmlFor='password'>Password:</label>
                <br />
                <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button onClick={loginToggle}>Login/Signup</button>
                <br />
                <button type='submit'>Submit User Data</button>
            </form>
        </div>
    )
}

export default Auth;