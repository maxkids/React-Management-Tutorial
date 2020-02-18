import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="gray-background">
        <img src={logo} alt="로고"/>
        <div>Let's develop management system!</div>
      </div>
    );
  }
}

export default App;
