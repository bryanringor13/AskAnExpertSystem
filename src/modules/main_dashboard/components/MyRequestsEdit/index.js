import React from 'react'
import { Container } from 'reactstrap'
import MyRequestsEdit from './components/MyRequestsEdit'

const MainDasboard = () => {
    return (
        <React.Fragment>
            <Container>
                <MyRequestsEdit />
            </Container>
        </React.Fragment>

    )
}

export default MainDasboard