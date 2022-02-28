import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux'

function Comments() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [useComments, setUseComments] = useState('');

    const handleSubmit = () => {
        console.log('submitted');
        dispatch({type: 'PAGE_FOUR', payload: useComments})
        history.push('/ReviewPage') // brings user to review page when next is clicked
    } // end handleSubmit

    return (
        <>
            <h1>Page 4 of 4</h1>

            <h3>Any Comments you want to leave?</h3>
            <input type="text"
                onChange={
                    (event) => setUseComments(event.target.value)
                }/>
            <button onClick={handleSubmit}>Next</button>
        </>
    )
}// end Comments

export default Comments;
