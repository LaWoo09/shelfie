import React from "react";
import axios from "axios";


class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            price: 0,
            imgUrl: ""
        }
        this.changeHandler = this.changeHandler.bind(this)
    };

    changeHandler(key, value) {
        this.setState({
          [key]: value
        })
      };

      postItem() {
          const {name, price, imgUrl} = this.state;
          axios.post('api/inventory', {name, price, imgUrl}).then(res => {
              this.setState({
                  name:"",
                  price: 0,
                  imgUrl:""
              })
          })
      }

    render() {
        return (
            <div className="form">
                <img src="https://via.placeholder.com/150C/O https://placeholder.com/"/>
                <form onSubmit={(e) => {
        e.preventDefault(e);
        
      }}>
                    <label>Image Url:</label>

                    <div><input name="imgUrl" onChange={(e) => this.changeHandler(e.target.name, e.target.value)}/></div>

                    <label>Product Name:</label>

                    <div><input name="name" onChange={(e) => this.changeHandler(e.target.name, e.target.value)}/></div>

                    <label>Price:</label>

                    <div><input name="price" onChange={(e) => this.changeHandler(e.target.name, e.target.value)}/></div>
                    <input type="reset" value="Cancel" />
                    <button>Add to Inventory</button>
                </form>
            </div>
        )
    }
};



export default Form;