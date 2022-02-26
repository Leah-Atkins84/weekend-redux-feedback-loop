import React from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch } from 'react-redux';
import FeedBackOne from '../FeedBackOne/FeedBackOne';
import Understanding from '../Understanding/Understanding';

function App() {
  // const dispatch = useDispatch();

  // const getFeedBack = () => {
  //   axios.get('/api/pizza')
  //   .then(response => {
  //     dispatch({
  //       type: 'FEED_BACK_ONE',
  //       payload: response.data
  //     });

  //   }).catch(error => {
  //     console.log('Error in feedbackone', error);
  //     alert('NO feedback FOR YOU')
  //   })
  // }


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <FeedBackOne/>
      <Understanding/>

    </div>
    
  

  );
}


export default App;
