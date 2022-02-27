import {useHistory} from 'react-router-dom';

function Understanding() {
    const history = useHistory();
    const [useUnderstanding, setUseUnderstanding] = useState (0);

    const handleSubmit = () => {
      console.log('submitted');
        dispatch({
        type: 'PAGE_TWO',
        payload: useUnderstanding
    })
        history.push('/Supported') 
    }
    return (
        <form>
            <h1>Page 2 of 4</h1>

            <h3>How well are you understanding the content?</h3>
            <input 
            type="number" 
            placeholder="On a scale of 1-5.."
            onChange={(event)=>setUseUnderstanding(event.target.value)}
            />
            <button type='submit' onClick={handleSubmit}>Next</button>
        </form>
    )
}

export default Understanding;
