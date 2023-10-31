export function Button({ label }) {
    return <button onClick={() => alert(`The label of this button is: ${label}.`)}>{label}</button>
}