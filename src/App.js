
import './App.css';
import  {useState} from 'react';
import React from 'react';
import Score from './Score';
import Solution from './Solution';
import Letters from './Letters';
import EndGame from './EndGame';

function App() {

  const generateLetterStatuses = function() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  const letterStatus = generateLetterStatuses()
  let solution = useState({word: 'TAMER', hint :'Me!'})
  let [score, setScor] = useState(100)
  let [selectedLetter, setSelectedLetter] = useState(letterStatus)
  let [failure, setFailure] = useState(false)
  let [success, setSuccess] = useState(false)

  
  const checkSolutionLettersStatus= function(solutionWord){
    for(let i=0 ; i<solutionWord.length; i++){
      if(selectedLetter[solutionWord[i]]){
        continue
      }else{
        return false
      }
      
    }
    return true
  
   }


   

let clickLetter = (letter) =>{
  let solutionWord = solution[0].word

  if( !selectedLetter[letter]){
    selectedLetter[letter]=true
    if(solutionWord.includes(letter)){
      
      setScor(score + 10)
    } else{
      setScor(score - 10)
      if(score<=0){
        
        setFailure(true)
      }
     
    }
   
   let succsessStatus = checkSolutionLettersStatus(solutionWord)

   if(succsessStatus){
    setSuccess(true)
   }



  }else{
    selectedLetter[letter]=true
  }


  let updatedSelectedLetter = {...selectedLetter}
    setSelectedLetter(updatedSelectedLetter);

}

  return (
    <div className="App">
      <EndGame failure={failure} success={success}/>
      <Score score={score}  />
      <Solution letterStatus = {selectedLetter} solution = {solution} />
      <Letters letterStatus = {selectedLetter}  clickLetter={clickLetter}/>
    </div>

  );
}

export default App;
