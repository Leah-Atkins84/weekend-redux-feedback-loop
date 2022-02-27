import {useHistory} from 'react-router-dom';
import {useState} from 'react';

function Supported() {
    const history = useHistory();
    const [useSupported, setUseSupported] = useState (0);

    const handleSubmit = () => {
      console.log('submitted');
        dispatch({
        type: 'PAGE_THREE',
        payload: useSupported
    })
        history.push('/Comments')
    }
    return (
        <form>
            <h1>Page 3 of 4</h1>

            <h3>How well do you feel supported?</h3>
            <input 
            type="number" 
            placeholder="On a scale of 1-5.."
            onChange={(event)=>setUseSupported(event.target.value)}
            />
            <button type='submit' onClick={handleSubmit}>Next</button>
        </form>
        
    )
}

export default Supported;
