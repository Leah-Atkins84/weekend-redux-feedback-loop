import {useHistory} from 'react-router-dom';


function FeedBackOne() {
    const history = useHistory();

    const handleSubmit = () => {
      history.push('/Understanding')
      console.log('submitted');
    }


    return(
        <form>
            <h1>Page 1 of 4</h1>

            <h3>How well are you feeling today?</h3>
            <input type="number" placeholder="On a scale of 1-5.."/>
            <button type='submit' onClick={ handleSubmit }>Next</button>
        </form>
    )
}

export default FeedBackOne;