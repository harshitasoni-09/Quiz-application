import React, {useContext} from 'react';
import { QuizContext } from '../Helpers/Contexts';
import "../App.css";

function MainMenu() {
    const { gameState, setGameState } = useContext(QuizContext);
  return (
    <div className="Menu">
      <h3>Let's Play!</h3>
      <button 
      onClick={() => {setGameState("quiz")}}
      >Start Quiz</button>
    </div>
  ); 
}

export default MainMenu
