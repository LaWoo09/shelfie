import React from "react";
import Product from "./Product.js";
import axios from "axios";


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }
   
  deleteItem(id) {
    axios.delete(`api/product/${id}`).then(res => {
      this.props.getAllItems();
    })
  }

    render() {
        
      
      const { inventory } = this.props
        const mappedInventory = inventory.map(item => {
        return <Product key={item.id} item={item} deleteItem={this.deleteItem}/>
          })
        return (
        <div>{mappedInventory}</div>
            
        )
    }

};


export default Dashboard;