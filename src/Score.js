import React from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';

function Score(props){

    return(
        <div className='score'>
             <div>
                <Grid container spacing={2}>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                <h1 className="Score-title">Score</h1>
                    <p>{props.score}</p>      
                </Grid>
                <Grid item xs={2}></Grid>
                </Grid>
            </div>
        </div>
    )
}
export default Score;