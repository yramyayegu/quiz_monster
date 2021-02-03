import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Question from './Question';
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