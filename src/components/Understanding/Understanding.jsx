import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux'


function Understanding() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [useUnderstanding, setUseUnderstanding] = useState(0);

    const handleSubmit = () => {
        console.log('submitted');
        if (useUnderstanding) {
            dispatch({type: 'PAGE_TWO', payload: useUnderstanding})
            history.push('/Supported') // page goes to next on submit
        } else 
            alert('feedback not complete')
         // if not complete will alert

    } // end HandleSubmit

    return (
        <>
            <h1>Page 2 of 4</h1>

            <h3>How well are you understanding the content?</h3>
            <input required type="number" placeholder="On a scale of 1-5.."
                onChange={
                    (event) => setUseUnderstanding(event.target.value)
                }/>
            <button onClick={handleSubmit}>Next</button>
        </>
    )
} // end Understanding

export default Understanding;
