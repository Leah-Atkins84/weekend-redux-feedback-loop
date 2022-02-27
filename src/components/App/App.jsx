import React from 'react';
import axios from 'axios';
import './App.css';
// import {useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import FeedBackOne from '../FeedBackOne/FeedBackOne';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import ReviewPage from '../ReviewPage/ReviewPage';

function App() {
  


    return (<Router>
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
                <h1>Thankyou for your feedback!!!</h1>
                <Link to="/"><button> Leave new feedback</button> </Link> 
                   
          

            </Route>


        </div>
    </Router>


    );
    }
    
    
    export default App;
