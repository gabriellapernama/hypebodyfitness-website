import React from 'react'; 
import {Link} from 'gatsby';
// this page will be deleted because it will be replaced to a subdomain on a separate directory

export default (props) => {
    return <div id={props.id}>
        <div><Link to="/">Back To Home</Link> </div>
        Sign In here: 
        <div>Don't have an account? Sign Up Here!</div>

    </div>
}