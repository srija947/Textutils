import React, { useState } from 'react'
import Notifications from './Notifications';
// import Alert from './components/Alert';

export default function Worddic(props) {
    const handleCopy = () => {
        var text = document.getElementById('area');
        text.select();
        navigator.clipboard.writeText(text.value);
        showAlert('text copied', 'success');
    }

    const [style, setstyle] = useState({
        color: 'black',
        backgroundColor: 'white',
    })
    const [btntext, setbtntext] = useState('Dark Mode')
    // const [btnstyle, setbtnstyle] = useState('btn btn-dark')

    const [alert, setAlert]= useState(null);

    const showAlert=(msg, type)=>{
        setAlert({
            msg:msg,
            type:type
        })
        setTimeout(()=>{
            setAlert(null)
        },1000);
    }

    const toggleStyle = () => {
        if (style.color === 'white') {
            setstyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setbtntext('Dark Mode');
            showAlert('Light Mode has Been enabled','success');
            document.body.style.backgroundColor='white'
            // setbtnstyle('btn btn-dark')
        } else {
            setstyle({
                color: 'white',
                backgroundColor: 'black',
            })
            setbtntext('Light Mode');
            showAlert('Dark Mode Enabled', 'success');
            document.body.style.backgroundColor='black'
            // setbtnstyle('btn btn-light')
        }
    }

    const textChange = (event) => {
        setText(event.target.value);
    }

    const toUpper = () => {
        var a = text.toUpperCase();
        setText(a);
        document.getElementById('area').style.background = 'blue';
        showAlert('upper case enabled', 'success');
    }

    const clearText = () => {
        setText('');
        showAlert('cleared text', 'success');
    }
    const toLower = () => {
        var b = text.toLowerCase();
        setText(b);
        document.getElementById('area').style.background = 'green';
        showAlert('lower case enabled', 'success');
    }

    // var w= text.endsWith(' ') == ' '? (text.split(' ').length)-1: text.split(' ').length;

    const [text, setText] = useState('')

    return (
        <div className='container my-4' style={style}>
            <h1 style={style}>{props.title}</h1>
            {/* <button type="button" className={btnstyle} onClick={toggleStyle}>{btntext}</button> */}
            <div class="form-check form-switch">
                <input className="form-check-input" onClick={toggleStyle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{btntext}</label>
            </div>
            <Notifications alert={alert}/>
            <div className="mb-4 my-4">

                <textarea className="form-control" value={text} onChange={textChange} id="area" rows="10" style={style}></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={toUpper}>Upper</button>
            <button type="button" className="btn btn-success mx-5" onClick={toLower}>Lower</button>
            <button type="button" className="btn btn-danger" onClick={handleCopy}>Copy text</button>
            <button type="button" className="btn btn-primary mx-5" onClick={clearText}>Clear Text</button>
            <br /><br />
            <h5>Text Summary</h5>
            Total Words: {text.length} <br />Words Count: {text.endsWith('') === '' ? (text.split(' ').length) - 1 : text.split(' ').length}
            <br /><br />
            <h5>Preview Text</h5> {text}

        </div>
    )
}

Worddic.defaultProps = {
    name: 'srija',
    title: 'work hard dear'
}


