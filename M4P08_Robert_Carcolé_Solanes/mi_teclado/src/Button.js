function Button({clickHandle, text, estyle}) {
    return (
        <button onClick={clickHandle} className="button" style={estyle}> {text} </button>
    )
}

export default Button;