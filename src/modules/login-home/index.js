import React from 'react'
import { Container } from 'reactstrap'
import Login from './components/login';

const LoginHome = () => {
  return (
    <React.Fragment>
        <Container fluid>
        <Login />
        </Container>
    </React.Fragment>

  )
}

export default LoginHome;