import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Question from './Question';
import Grid from '@material-ui/core/Grid';

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">
            {`${Math.round(props.value,)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    height: 500,
    width: '100%',
    padding : '15px',
  },
  btn : {
    fontSize : '1.5rem',
    textAlign: 'center'
  }
});
let i = 0;
const Question_topic = ['Programming language ','Javascript ','Ajax','React','Angalur']
const Question_title = ['What is programming language? ','Javascript ','Ajax','React','Angalur']
const Question_options = [
    ['opt1','opt2','opt3','opt4'],
    ['opt11','opt22','opt33','opt44'],
    ['opt111','opt222','opt333','opt444'],
    ['opt1111','opt2222','opt3333','opt4444'],
    ['opt11111','opt22222','opt33333','opt44444'],
]
const Question_answer = ['opt1','opt11','opt111','opt1111','opt11111'];
export default function StartQuiz() {
    const classes = useStyles();
    const [Result,setResult] = useState(0)
    const [QuestoinTopic,setQuestoinTopic] = useState(Question_topic[i])
    const [QuestoinTitle,setQuestoinTitle] = useState(Question_title[i])
    const [QuestoinOptions,setQuestoinOptions] = useState(Question_options[i])
    const [QuestionAnswer,setQuestionAnswer] = useState(Question_answer[i])
    
   
    const [progress, setProgress] = React.useState(0);
    const TotalResult  = (()=>{
      console.log(Result) 
      
      setResult(Result+10)
      console.log('result')
      console.log(Result)
    })
    const nextProgress  = (()=>{
        (progress == 100) ? setProgress(0) : setProgress(progress+20);
        setQuestoinOptions(Question_options[++i])
        setQuestoinTopic(Question_topic[i])
        setQuestoinTitle(Question_title[i])
        setQuestionAnswer(Question_answer[i])
    })
    
    return (
    <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
                <LinearProgressWithLabel value={progress} />
                <Question 
                topic={QuestoinTopic}
                title={QuestoinTitle}
                options={QuestoinOptions}
                answer={QuestionAnswer} 
                result={TotalResult}
                />
                <Button 
                    variant="contained" 
                    color="secondary" 
                    className={classes.btn} 
                    onClick={nextProgress.bind()}>
                    {(progress == 100) ? 'Submit' : 'Next'}
                    </Button>
          </Grid>
          <Grid item xs={2}></Grid>
      </Grid>
    </div>
  );
}
