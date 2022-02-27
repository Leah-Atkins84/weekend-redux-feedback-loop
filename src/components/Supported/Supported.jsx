import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux'

function Supported() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [useSupported, setUseSupported] = useState(0);

    const handleSubmit = () => {
        console.log('submitted');
        if (useSupported) {
            dispatch({type: 'PAGE_THREE', payload: useSupported})
            history.push('/Comments') // page goes to next on submit
        } else 
            alert('feedback not complete');
         // if not complete will alert
    } // end handleSubmit
    
    return (
        <>
            <h1>Page 3 of 4</h1>

            <h3>How well do you feel supported?</h3>
            <input type="number" placeholder="On a scale of 1-5.."
                onChange={
                    (event) => setUseSupported(event.target.value)
                }/>
            <button onClick={handleSubmit}>Next</button>
        </>

    )
} // end Supported

export default Supported;
