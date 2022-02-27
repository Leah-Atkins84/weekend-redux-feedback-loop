import {useHistory} from 'react-router-dom';
import {useState} from 'react';

function Comments() {
    const history = useHistory();
    const [useComments, setUseComments] = useState ('');

    const handleSubmit = () => {
      console.log('submitted');
        dispatch({
        type: 'PAGE_FOUR',
        payload: useComments
    })
        history.push('/ReviewPage')
    }
    
    return(
        <form>
            <h1>Page 4 of 4</h1>

            <h3>Any Comments you want to leave?</h3>
            <input 
            type="text"
            onChange={(event)=>setUseComments(event.target.value)}
            />
            <button type='submit' onClick={handleSubmit}>Next</button>
        </form>
    )
}

export default Comments;