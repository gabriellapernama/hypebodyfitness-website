import React from 'react'; 
import {Link} from 'gatsby';
import NavBar from '../components/navigationBar.js';

export default () => {
    return <div>
        <div><Link to="/">Back To Home</Link> </div>
        Sign In here: 
        <div>Don't have an account? Sign Up Here!</div>

    </div>
}