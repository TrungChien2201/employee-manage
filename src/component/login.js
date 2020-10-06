import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from 'antd';
const Login = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated ? (
            <div>
                <Button className="ml-4 mt-2" type="primary" onClick={() => loginWithRedirect()}>
                Login
                </Button>
            </div>
        ) : (<Button type="link" className="ml-2" danger onClick={() => logout()}>Logout</Button>)
    )
}

export default Login;
