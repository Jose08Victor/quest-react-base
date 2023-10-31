export function Paragraph({ paragraphColor, stateOfLetters }) {
    return <p style={{ color: paragraphColor,
                       textTransform: stateOfLetters}}>
             Lorem ipsum dolor sit amebt, consectetur adipiscinga elit.
           </p>
}