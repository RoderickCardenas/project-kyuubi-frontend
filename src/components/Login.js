import React from 'react'
import Nav from './Nav'

const Login = () => {
    return ( 
    <div>
        <Nav/>
        <form>
            <label>Username:</label>
            <input>
            </input>
            <label>Password:</label>
            <input>
            </input>
        </form>
    </div>
    )
}

export default Login