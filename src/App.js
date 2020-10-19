import React from 'react';
import Header from './components/header'
import Headline from './components/headline'
import './app.scss';

const tempArr = [{
  fName: 'Donald',
  lName: 'Trump',
  email: 'maga@email.com',
  age: 74,
  onlineStatus: true
}]

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Post" desc="Click the Button to render posts" tempArr={tempArr}/>
      </section>
    </div>
  );
}

export default App;
