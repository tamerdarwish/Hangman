import Letter from './Letter'

const Letters = ({letterStatus, clickLetter}) => {
    const letters = Object.keys(letterStatus)
    return (
        <div>
            <div> Available Letters</div>
            {letters.map(letter => letterStatus[letter] ? <span className='selectedLetter'> <Letter letter={letter} clickLetter={clickLetter} /> </span> : <Letter letter={letter}  clickLetter={clickLetter}/> )}
        </div>
    )
}

export default Letters