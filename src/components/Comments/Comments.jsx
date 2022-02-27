import {useState} from 'react';

function Comments() {
    const [useComments, SetUseComments] = useState (0);

    const handleSubmit = () => {
      console.log('submitted');
        dispatch({
        type: 'PAGE_FOUR',
        payload: useComments
    })
        history.push('/')
    }
    
    return(
        <form>
            <h1>Page 4 of 4</h1>

            <h3>Any Comments you want to leave?</h3>
            <input 
            type="text"
            onChange={(event)=>SetUseComments(event.target.value)}
            />
            <button type='submit'>Next</button>
        </form>
    )
}

export default Comments;