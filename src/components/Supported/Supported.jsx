import {useHistory} from 'react-router-dom';


function Supported() {
    const history = useHistory();

    const handleSubmit = () => {
      history.push('/Comments')
      console.log('submitted');
    }
    return (
        <form>
            <h1>Page 3 of 4</h1>

            <h3>How well do you feel supported?</h3>
            <input type="number" placeholder="On a scale of 1-5.."/>
            <button type='submit' onClick={handleSubmit}>Next</button>
        </form>
        
    )
}

export default Supported;
