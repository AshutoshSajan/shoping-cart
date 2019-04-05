import React, { Component } from 'react';
// import Cart from './Cart';
import uuid from './uuid';

export default class Card extends Component {

  render() {
    console.log(this.props);
    const {data} = this.props
    const filtered = this.props.data.filtered
    return (
      <>
        {
          filtered ? 
            (filtered.map(v => 
              <div className="product" key={uuid()} onClick={() => {this.props.toggleCart(); console.log("clicked")} } >
                <p className="shipping">Free shipping</p>
                <figure className="img-box">
                  <img src={`https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/${v.sku}_1.jpg`} alt="product_img"/>
                </figure>
                <div className="product-details">
                  <p className="tshirt-title">{v.title}</p>
                  <p className="line"></p>
                  <div className="price">
                    <span>{v.currencyFormat}</span>
                    <b className="bold">{v.price.toString().split(".")[0]}</b>
                    <span>{v.price.toString().split(".")[1] ? (` .${v.price.toString().split(".")[1]}`) : ".00"}</span>
                    <p>{`or ${v.installments} X ${v.currencyFormat} ${(v.price/v.installments).toFixed(2)}`}</p>
                  </div>
                </div>
                <p className="add-to-cart">Add to Cart</p>
              </div>
            )) :

          (data.data.map(v => 
          <div className="product" key={uuid()} onClick={() =>  {this.props.toggleCart(); console.log("call")}} >
            <p className="shipping">Free shipping</p>
            <figure className="img-box">
              <img src={`https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/${v.sku}_1.jpg`} alt="product_img"/>
            </figure>
            <div className="product-details">
              <p className="tshirt-title">{v.title}</p>
              <p className="line"></p>
              <div className="price">
                <span>{v.currencyFormat}</span>
                <b className="bold">{v.price.toString().split(".")[0]}</b>
                <span>{v.price.toString().split(".")[1] ? (` .${v.price.toString().split(".")[1]}`) : ".00"}</span>
                <p>{`or ${v.installments} X ${v.currencyFormat} ${(v.price/v.installments).toFixed(2)}`}</p>
              </div>
            </div>
            <p className="add-to-cart">Add to Cart</p>
           </div>
          ))}
      </>
    );
  }
}
