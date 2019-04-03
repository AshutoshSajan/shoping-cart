import React, { Component } from 'react';
// import media from "./media/images/100_1.jpg";

export default class Card extends Component {
  state = {
    data: null,
    key:0
  }

  render() {
    // console.log(this.props.data);
    return (
      <>
        {
          this.props.data.map(v => 
        <div className="product" key={v.sku}>
          <p className="shipping">Free shipping</p>
          <figure className="img-box">
            <img src={`https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/${v.sku}_1.jpg`} alt="product_img"/>
          </figure>
          <p></p>
          <div>
            <span></span>
            <b></b>
            <span></span>
          </div>
          <p className="add-to-cart">Add to Cart</p>
         </div>
        )}
      </>
    );
  }
}
