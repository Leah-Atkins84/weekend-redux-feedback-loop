import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux'


function FeedBackOne() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [useFeeling, setUseFeeling] = useState(0);

    const handleSubmit = () => {
        console.log('submitted');
        dispatch({type: 'FEED_BACK_ONE', payload: useFeeling})
        history.push('/Understanding')
    }


    return (
        <>
            <h1>Page 1 of 4</h1>

            <h3>How well are you feeling today?</h3>
            <input type="number" placeholder="On a scale of 1-5.."
                onChange={
                    (event) => setUseFeeling(event.target.value)
                }/>
            <button onClick={handleSubmit}>Next</button>
        </>
    )
}

export default FeedBackOne;
