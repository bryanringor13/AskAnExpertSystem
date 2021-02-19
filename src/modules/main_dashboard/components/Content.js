import React from 'react'
import CoffeeCard from './CoffeeCard'
import { Grid } from '@material-ui/core';
const Content = () => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
                <CoffeeCard title="Hamilton beach FlexBrew" subtitle="89.99" avatarSrc="https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_1280.png"/>
            </Grid>
            {/* <Grid item xs={12} sm={4}>
                <CoffeeCard />
            </Grid>
            <Grid item xs={12} sm={4}>
                <CoffeeCard />
            </Grid>
            <Grid item xs={12} sm={4}>
                <CoffeeCard />
            </Grid>
            <Grid item xs={12} sm={4}>
                <CoffeeCard />
            </Grid> */}
        </Grid>
        
    )
}

export default Content