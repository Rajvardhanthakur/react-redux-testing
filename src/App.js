import React, { Component } from 'react';
import Header from './component/header';
import Headline from './component/headline'
import './app.scss';

const tempArr = [{
  fName: 'Raj',
  lName: 'Thakur',
  email: 'raj123@gmail.com',
  age: 23,
  onlineStatus: true
}]

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          desc="Click the button to render posts"
          tempArr={tempArr}
        />
      </section>
    </div>
  );
}

export default App;
