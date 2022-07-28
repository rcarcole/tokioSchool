import Button from './Button.js';

function Keyboard(props) {
    const onClickHandle = (event) => {
        // console.log(event.target.innerText);
        props.changeHandler(event.target.innerText);
    }
    
    return(
        <div className="keyboard">
            <div className="row">
                <Button clickHandle={onClickHandle} text="Q" />
                <Button clickHandle={onClickHandle}text="W" />
                <Button clickHandle={onClickHandle} text="E" />
                <Button clickHandle={onClickHandle} text="R" />
                <Button clickHandle={onClickHandle} text="T" />
                <Button clickHandle={onClickHandle} text="Y" />
                <Button clickHandle={onClickHandle} text="U" />
                <Button clickHandle={onClickHandle} text="I" />
                <Button clickHandle={onClickHandle} text="O" />
                <Button clickHandle={onClickHandle} text="P" />
            </div>
            <div className="row">
                <Button clickHandle={onClickHandle} text="A" />
                <Button clickHandle={onClickHandle} text="S" />
                <Button clickHandle={onClickHandle} text="D" />
                <Button clickHandle={onClickHandle} text="F" />
                <Button clickHandle={onClickHandle} text="G" />
                <Button clickHandle={onClickHandle} text="H" />
                <Button clickHandle={onClickHandle} text="J" />
                <Button clickHandle={onClickHandle} text="K" />
                <Button clickHandle={onClickHandle} text="L" />
            </div>
            <div className="row">
                <Button clickHandle={onClickHandle} text="Z" />
                <Button clickHandle={onClickHandle} text="X" />
                <Button clickHandle={onClickHandle} text="C" />
                <Button clickHandle={onClickHandle} text="V" />
                <Button clickHandle={onClickHandle} text="B" />
                <Button clickHandle={onClickHandle} text="N" />
                <Button clickHandle={onClickHandle} text="M" />
                <Button clickHandle={onClickHandle} text="&nbsp;" estyle={{ width: '100px'}} />
                <Button clickHandle={onClickHandle} text="Borrar" />
            </div>
        </div>
    )
}

export default Keyboard;