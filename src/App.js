import React,{useState} from "react";
import QuizScreen from "./component/QuizScreen";
import JoinScreen from "./component/JoinScreen";

function App() {
const [isQuizStarted,setIsQuizStarted] = useState(false)

  return (
   <>
   
   <div className="quiz-container">
    {
      isQuizStarted ? (
        <QuizScreen retry={()=>setIsQuizStarted(false)}/>
) : (
  <JoinScreen start={()=>setIsQuizStarted(true)}/>
)
    }
   </div>
   </>
  );
}

export default App;
