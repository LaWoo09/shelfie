import React from "react";


class Product extends React.Component {
    render() {
        console.log(this.props.item)
        const { name, imgUrl, price } = this.props.item
        return (
        <div>
            <div>{imgUrl}</div>
            <div>
                <p>{name}</p>
                <p>{price}</p>
            </div> 
        </div>
        )
    }
}


export default Product;