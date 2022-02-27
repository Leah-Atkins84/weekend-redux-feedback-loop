import {useState} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';


function ReviewPage() {
    const feeling = useSelector(store => store.PageOne)
    const understanding = useSelector(store => store.UnderstandingReducer)
    const support = useSelector(store => store.SupportReducer)
    const comments = useSelector(store => store.CommentsReducer)

    const handleSubmit = () => {

        console.log(`Adding feedback`, {feeling, understanding, support, comments});

        // TODO - axios request to server to feedback
        axios.post('/feedback', {feeling, understanding, support, comments}).then(response => {}).catch(error => {
            console.log('Error POSTing!!', error);
            alert('Feedback not good');
        })
    };

    return (
        <>
            <p>{feeling}</p>
            <p>{understanding}</p>
            <p>{support}</p>
            <p>{comments}</p>
            <button onClick={handleSubmit}>Submit Feedback</button>
        </>
    )
}

export default ReviewPage;
