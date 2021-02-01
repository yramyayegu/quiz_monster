import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import './App.css';


const useStyles = makeStyles(theme => ({
  root: {
    height: 400,
    textAlign: 'left'
  },
  title : {
    fontSize:'1.6em',
    textAlign: 'left',
    color: '#3f51b5',
  },

  opt : {
    textAlign: 'left',
    fontSize:'1.6em',
    fontWeight: 300,
  }
 
}));

function Question(props)
{
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value === props.answer) {
      setHelperText('You got it!');
      props.result();
      setError(false);

    } else if (value === '') {
      setHelperText('Please select an option.');
      setError(true);
      
    } else {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    }
  };
  
    return(

      <div className={classes.root}>
          <h1 className={classes.title}>{props.topic}</h1>         
          <form onSubmit={handleSubmit}>
            <FormControl component="fieldset" error={error} className={classes.formControl}>
              <FormLabel component="legend"><h1 className="que">{props.title}</h1></FormLabel>
              
              <RadioGroup aria-label="quiz" name="quiz" className="que" value={value} onChange={handleRadioChange}>
              {props.options.map((item) => 
                <FormControlLabel value={item} className="que" control={<Radio />} label={item} />
              )}  
              </RadioGroup>
             
              <Button type="submit" variant="outlined" color="primary" className={classes.button}>
                Check Answer
              </Button>
            </FormControl>
          </form>
          <FormHelperText>{helperText}</FormHelperText>
    </div>
      
    )
}
export default Question;