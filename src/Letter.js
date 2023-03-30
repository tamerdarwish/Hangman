

const Letter = ({letter, clickLetter}) => {
    
    return (
        <span onClick ={() => clickLetter(letter)}>{letter}</span>
    )
}

export default Letter