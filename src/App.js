import React, { Component } from 'react';
import Header from './components/header'
import Headline from './components/headline'
import SharedButton from './components/button/button'
import ListItem from './components/listitem/list'
import {connect} from 'react-redux'
import {fetchPosts}from './actions'
import './app.scss';
import { render } from 'enzyme';

const tempArr = [{
  fName: 'Donald',
  lName: 'Trump',
  email: 'maga@email.com',
  age: 74,
  onlineStatus: true
}]

class App extends Component {
  constructor(props){
    super(props)
    this.fetch = this.fetch.bind(this)
  }
  
  fetch(){
    this.props.fetchPosts();
  }

render(){
const {posts} = this.props;

const configButton = {
  buttonText: 'Get Posts',
  emitEvent: this.fetch
}

  return (
    <div className="App" data-test="appComponent">
      <Header />
      <section className="main">
        <Headline header="Post" desc="Click the Button to render posts" tempArr={tempArr}/>
        <SharedButton {...configButton} />
        {posts.length > 0 && 
        <div>
          {posts.map((post, index)=> {
            const {title, body} = post
            const configListItem = {
              title,
              desc: body
            }
            return (
              <ListItem key={index} {...configListItem}/>
            )
          })}
        </div> }
      </section>
    </div>
  );
}
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(App);
