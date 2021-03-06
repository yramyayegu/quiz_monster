import React, { useState } from 'react';
import './App.css';
import Header from './Header'
import StartQuiz from './StartQuiz'
import Footer from "./Footer";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// Two ways i used css 
// First way
const useStyles = makeStyles(theme => ({
  root: {
    
    height: 550,
    display: "flex",
    justifyContent: "center",
    textAlign: 'center'
  },
  btn : {
      fontSize : '1.5rem',
      textAlign: 'center'
  }
}));
// Second way
const styles = {
  paperContainer: {
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${"https://www.bergerpaints.com/colour-magazine/Upload/Quiz/Banner/quiz-bnr-nov19.jpg"})`
  }
};

function App() {
  const [start,setStart] = useState(false)
// welcome screen with start game button 
// after clicking start game button startGame method will trigger and StartQuiz component will apper
  function Startgame()
  {
    const classes = useStyles();
    const startGame = () => { setStart(true) }   
      return(
          <div className={classes.root} style={styles.paperContainer}>
          <Grid container spacing={2}>
              <Grid item xs={4}></Grid>
              <Grid item xs={4}>
                  <h1 className="Start-title">Welcome</h1>
                  <Button variant="contained" color="secondaryy" className={classes.btn} onClick={startGame}>  Start Game</Button>
              </Grid>
              <Grid item xs={4}></Grid>
          </Grid>       
        </div>
    )
  } 
    
    return (
        <div className="App">
          <Header />
            {(start) ? <StartQuiz/> : <Startgame />}
          <Footer />
      </div>
    );
}
export default App;