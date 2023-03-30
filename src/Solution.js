import Letter from './Letter'

const Solution = ( {letterStatus , solution}) => {
    return (
        <div>
            {solution[0].word.split("").map(char => letterStatus[char] ? <Letter letter={char} /> : <Letter letter={' _ '} />)}
            <div>
                <em>{solution[0].hint}</em>
            </div>
        </div>
        
    )
}

export default Solution