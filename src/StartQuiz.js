import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Question from './Question';
import Score from './Score';
import Grid from '@material-ui/core/Grid';
import './App.css';

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">
            <p className="percentage">{`${Math.round(props.value,)}%`}</p>
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
    height: 520,
    width: '100%',
    padding : '15px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${"https://www.bergerpaints.com/colour-magazine/Upload/Quiz/Banner/quiz-bnr-nov19.jpg"})`
  },
 
});

let i = 0;
let Result = 0;
const Question_topic = ['React','React','React','React','React']
const Question_title = ['Everything in React is a_______? ','How many elements does a react component return?','What is a react.js in MVC?','Who Develop React.js? ',' Which of the following is the correct data flow sequence of flux concept? ']
const Question_options = [
    ['Module','Component','Package','Class'],
    ['2Elements','1Element','Multiple Elements','None of These'],
    ['Middleware','Controller','Model','Router'],
    ['Apple','Facebook','Twitter','Google'],
    ['Dispatcher->Action->Store->View','Action->Dispatcher->View->Store','Action->Dispatcher->Store->View','Action->Store->Dispatcher->View'],
]
const Question_answer = ['Component','Multiple Elements','Controller','Facebook','Action->Dispatcher->View->Store'];
const Average = Math.ceil(100/Question_topic.length); 

export default function StartQuiz() {
    const classes = useStyles();
    const [QuestoinTopic,setQuestoinTopic] = useState(Question_topic[i])
    const [QuestoinTitle,setQuestoinTitle] = useState(Question_title[i])
    const [QuestoinOptions,setQuestoinOptions] = useState(Question_options[i])
    const [QuestionAnswer,setQuestionAnswer] = useState(Question_answer[i])
    const [progress, setProgress] = React.useState(0);
    const [TotalScore, setScore] = React.useState(0);
  
  
    const TotalResult  = (()=>{
      Result = Result+20;
      setScore(Result)
      console.log(Result)
    })
  
    const nextProgress  = (()=>{
        (progress === (100-Average)) ? setProgress(100) : setProgress(progress+Average);
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
             
                {(progress === 100) ?  <Score score={TotalScore}/> :  <Question topic={QuestoinTopic}  title={QuestoinTitle} options={QuestoinOptions} answer={QuestionAnswer} result={TotalResult} progress={progress} progressbtn={nextProgress} Average={Average}  />}               
          </Grid>
          <Grid item xs={2}></Grid>
      </Grid>
    </div>
  );
}
