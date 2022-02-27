import {useState} from 'react';

function Comments() {
    const [useComments, setUseComments] = useState ('');

    const handleSubmit = () => {
      console.log('submitted');
        dispatch({
        type: 'PAGE_FOUR',
        payload: useComments
    })
        //history.push('/')
    }
    
    return(
        <form>
            <h1>Page 4 of 4</h1>

            <h3>Any Comments you want to leave?</h3>
            <input 
            type="text"
            onChange={(event)=>setUseComments(event.target.value)}
            />
            <button type='submit'>Next</button>
        </form>
    )
}

export default Comments;