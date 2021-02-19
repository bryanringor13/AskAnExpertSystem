import React from 'react'
import { Container } from 'reactstrap'
import MyRequests from './components/MyRequests'

const MainDasboard = () => {
    return (
        <React.Fragment>
            <Container>
                <MyRequests />
            </Container>
        </React.Fragment>

    )
}

export default MainDasboard