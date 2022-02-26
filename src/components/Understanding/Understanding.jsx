import {useHistory} from 'react-router-dom';

function Understanding() {
    const history = useHistory();

    const handleSubmit = () => {
      history.push('/Supported')
      console.log('submitted');
    }
    return (
        <form>
            <h1>Page 2 of 4</h1>

            <h3>How well are you understanding the content?</h3>
            <input type="number" placeholder="On a scale of 1-5.."/>
            <button type='submit' onClick={handleSubmit}>Next</button>
        </form>
    )
}

export default Understanding;
