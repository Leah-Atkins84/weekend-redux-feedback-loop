import {useState} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';


function ReviewPage() {
    const feeling = useSelector(store => store.PageOne)
    const understanding = useSelector(store => store.UnderstandingReducer)
    const support = useSelector(store => store.SupportedReducer)
    const comments = useSelector(store => store.CommentReducer)

    const history = useHistory();

    const handleSubmit = () => {

        console.log(`Adding feedback`, {feeling, understanding, support, comments});

        // - axios request to server to feedback
        axios.post('/feedback', {feeling, understanding, support, comments}).then(response => {
            console.log('Yay');
        }).catch(error => {
            console.log('Error POSTing!!', error);
            alert('Feedback not good');
        })
        history.push('/Success')// sends user to success page
    };


    return (// displays all feedback
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
