import React from 'react';
import PostFormContainer from './containers/PostFormContainer'
import AllPostContainer from './containers/AllPostContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <PostFormContainer/>
      <AllPostContainer/>
    </div>
  );
}

export default App;
