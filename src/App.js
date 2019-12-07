import React from 'react';
import axios from 'axios';
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Form from "./components/Form"
import './App.css';


class App extends React.Component{
  constructor() {
    super();
    this.state = {
      inventory: [{
        name: "IMac",
        price: 299.99,
        imgUrl: "https://via.placeholder.com/250x150"
      },
      {
        name: "IMac",
        price: 299.99,
        imgUrl: "https://via.placeholder.com/250x150"
      },
      {
        name: "IMac",
        price: 299.99,
        imgUrl: "https://via.placeholder.com/250x150"
      }]
    }
    this.getAllItems = this.getAllItems.bind(this)
  };

  componentDidMount() {
    this.getAllItems();
  };

  getAllItems() {
    axios.get("/api/inventory").then(res => {
      this.setState({
        inventory: res.data
      })
    })
  };



 


  



  render() {
    const { inventory } = this.state

    
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <Dashboard inventory={inventory} getAllItems={this.getAllItems}/>
          <Form/>
        </div>
      </div>
    );
  }    
}

export default App;
