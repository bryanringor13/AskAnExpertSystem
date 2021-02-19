import React from 'react'
import { Container } from 'reactstrap'

import Dashboard from './components/Dashboard/Dashboard'
// import Footer from '../common/components/footer/footer'


const MainDasboard = () => {
    return (
        <React.Fragment>
            <Container>
                <Dashboard />
            </Container>
        </React.Fragment>

    )
}

export default MainDasboard
