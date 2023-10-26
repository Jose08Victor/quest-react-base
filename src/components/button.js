function Button({ label }) {
    const event = () => alert(`The label of this button is: ${label}.`);

    return <button onClick={event}>{label}</button>
}

export default Button;