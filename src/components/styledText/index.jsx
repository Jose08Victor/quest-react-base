function Paragraph({ paragraphColor, stateOfLetters }) {
    return <p style={{ color: paragraphColor,
                       textTransform: stateOfLetters}}>
             Lorem ipsum dolor sit amet, consectetur adipiscinga elit.
           </p>
}

export default Paragraph;