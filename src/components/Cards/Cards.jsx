import React from 'react';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

import  {Card , CardContent , Typography , Grid, styled, StylesProvider } from '@material-ui/core';

const Cards = ({ data : { confirmed , recovered , deaths , lastUpdate } }) => {

    if(!confirmed){
        return 'Loading...';
    }
    
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component = {Card} xs ={12} md={3} className={cx(styles.card , styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom > Infected </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start = {0}
                                end = {confirmed.value}
                                duration = {2.5}
                                seperator = ","
                            />
                         </Typography>
                        <Typography color="textSecondary" > {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2"  > Number Of Active Cases of Covid-19 </Typography>
                    </CardContent>
                </Grid>

                <Grid item component = {Card} xs ={12} md={3} className={cx(styles.card , styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom > Recoverd </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start = {0}
                                end = {recovered.value}
                                duration = {2.5}
                                seperator = ","
                            />
                         </Typography>
                        <Typography color="textSecondary" > Real date </Typography>
                        <Typography variant="body2"  > Number Of Recoverd Cases of Covid-19 </Typography>
                    </CardContent>
                </Grid>

                <Grid item component = {Card} xs ={12} md={3} className={cx(styles.card , styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom > Deaths </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start = {0}
                                end = {deaths.value}
                                duration = {2.5}
                                seperator = ","
                            />
                         </Typography>
                        <Typography color="textSecondary" > Real date </Typography>
                        <Typography variant="body2"  > Number Of Deaths Cases of Covid-19 </Typography>
                    </CardContent>
                </Grid>

            </Grid>

        </div>
    )
}

export default Cards;