import React, { useState } from 'react'

export default function Worddic(props) {
    const handleCopy=()=>{
        var text= document.getElementById('area');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const [style, setstyle]= useState({
        color:'black', 
        backgroundColor: 'white'
    })
    const [btntext, setbtntext]= useState('Dark Mode')
    const [btnstyle, setbtnstyle]= useState('btn btn-dark')

    const toggleStyle= ()=>{
        if(style.color === 'white'){
            setstyle({
                color:'black', 
                backgroundColor: 'white'
            })
            setbtntext('Dark Mode')
            setbtnstyle('btn btn-dark')
        }else{
            setstyle({
                color:'white', 
                backgroundColor: 'black'
            })
            setbtntext('Light Mode')
            setbtnstyle('btn btn-light')
        }
    }

    const textChange=(event)=>{
        setText(event.target.value);
    }

    const toUpper=()=>{
        var a= text.toUpperCase();
        setText(a);     
        document.getElementById('area').style.background='blue';  
    }

    const clearText=()=>{
        setText('');
    }
    const toLower=()=>{
        var b=text.toLowerCase();
        setText(b);
        document.getElementById('area').style.background='green';
    }

    // var w= text.endsWith(' ') == ' '? (text.split(' ').length)-1: text.split(' ').length;

    const [text, setText] = useState('')

    return (
        <div className='container my-4' style={style}>
            <h1 style={style}>{props.title}</h1>
            <button type="button" className={btnstyle} onClick={toggleStyle}>{btntext}</button>
            <div className="mb-4 my-4">
                
                <textarea className="form-control" value={text} onChange={textChange} id="area" rows="10" style={style}></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={toUpper}>Upper</button>
            <button type="button" className="btn btn-success mx-5" onClick={toLower}>Lower</button>
            <button type="button" className="btn btn-danger" onClick={handleCopy}>Copy text</button>
            <button type="button" className="btn btn-primary" onClick={clearText}>Clear Text</button>
            <br/><br/>
            <h5>Text Summary</h5>
            Total Words: {text.length} <br/>Words Count: {text.endsWith('') === ''? (text.split(' ').length)-1: text.split(' ').length}
            <br/><br/>
            <h5>Preview Text</h5> {text}
             
        </div>
    )
}

Worddic.defaultProps = {
    name: 'srija',
    title: 'work hard dear'
}


