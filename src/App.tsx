import React,{Component} from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    id:1,
    image:'https://placeimg.com/64/64/1',
    name:'홍길동',
    birthday:'800221',
    gender:'남',
    job:'직장인'
  },
  {
    id:2,
    image:'https://placeimg.com/64/64/2',
    name:'이동석',
    birthday:'760421',
    gender:'여',
    job:'지하철'
  },
  {
    id:3,
    image:'https://placeimg.com/64/64/3',
    name:'장효익',
    birthday:'740213',
    gender:'남',
    job:'사장'
  }
]

class App extends Component {
  render(){
    return (
     <>
        {customers.map(e => {
           return (
           <Customer 
              key={e.id}
              id={e.id}
              image={e.image}
              name={e.name}
              birthday={e.birthday}
              gender={e.gender}
              job={e.job}
          />)
        })}
     </>
    );
  }
}

export default App;
