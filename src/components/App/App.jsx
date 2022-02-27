import React from 'react';
import axios from 'axios';
import './App.css';
import {useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import FeedBackOne from '../FeedBackOne/FeedBackOne';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import ReviewPage from '../ReviewPage/ReviewPage';

function App() {
    // const dispatch = useDispatch();

    // const getFeedBack = () => {
    // axios.get('/api/pizza')
    // .then(response => {
    //     dispatch({
    //       type: 'FEED_BACK_ONE',
    //       payload: response.data
    //     });

    // }).catch(error => {
    //     console.log('Error in feedbackone', error);
    //     alert('NO feedback FOR YOU')
    // })
    // }


    return (
        <Router>
            <div className='App'>
                <header className='App-header'>
                    <h1 className='App-title'>Feedback!</h1>
                    <h4>Don't forget it!</h4>
                </header>
                <Route path="/" exact>
                    <FeedBackOne/>
                </Route>

                <Route path="/Understanding" exact>
                    <Understanding/>
                </Route>

                <Route path="/Supported" exact>
                    <Supported/>
                </Route>

                <Route path="/Comments" exact>
                    <Comments/>
                </Route>

                <Route path="/ReviewPage" exact>
                  <ReviewPage/>
                </Route>
                <Route path="/Success" exact>
                  <h1>Success!!!</h1>
                  
                </Route>


            </div>
        </Router>


    );
}


export default App;
