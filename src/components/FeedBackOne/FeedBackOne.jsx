import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux'


function FeedBackOne() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [useFeeling, setUseFeeling] = useState(0);


    const handleSubmit = () => {
        console.log('submitted');
        if (useFeeling) {
            dispatch({type: 'FEED_BACK_ONE', payload: useFeeling})
            history.push('/Understanding') // page goes to next on submit
        } else 
            alert('feedback not complete')
         // if not complete will alert

    } // end handle submit


    return (
        <>
            <h1>Page 1 of 4</h1>

            <h3>How well are you feeling today?</h3>
            <input required type="number" placeholder="On a scale of 1-5.."
                onChange={
                    (event) => setUseFeeling(event.target.value)
                }/>
            <button onClick={handleSubmit}>Next</button>
        </>
    )
} // end FeedBackOne

export default FeedBackOne;
