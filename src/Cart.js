import React from 'react';
import uuid from './uuid.js';

export default class Cart extends React.Component {
	state = {
		isOpen: false,
	}

	render(){
		// console.log(this.props)
		const {data} = this.props
		return(
			<div className={`cart ${data.isOpen ? "open" : "close"}`}>
				<button className="cart-btn" onClick={this.props.toggleCart}>
					{
						data.isOpen ?
						<span className="close-btn">X</span> : 
						<i className="fas fa-cart-plus"></i> 	
					}
				</button>
				<div className="cart-header"><i className="fas fa-cart-plus"></i></div>
				<ul className="ul">
					{data.cartItem.map(item => 
						(<li key={uuid()} className="shop-items">
							<div className="item-size-details">
								<img src={`https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/${item.sku}_2.jpg`} alt="product_img"/>
								<div className="item-quantity">
									<p>{item.title}</p>
									<p><span>{item.availableSizes[0]}</span>{` | ${item.style}`}</p>
									<p>Quantity : <span></span></p>
								</div>
							</div>
							<div className="item-price">
								<button className="remove-items" onClick={(e) => this.props.handleRemove(e, item)}>X</button>
								<div>
									<span>{item.currencyFormat}</span>
									<b className="bold">{item.price.toString().split(".")[0]} </b>
	                  <span>
	                  	{item.price.toString().split(".")[1] ? (` .${item.price.toString().split(".")[1]}`) : ".00"}
	                  </span>
	                </div>
							</div>
						</li>)
						)}
				</ul>
				<div className="subtotal-sec">
					<div className="total-price">
						<p>SUBTOTAL</p>
						<p>price</p>
					</div>
					<button className={`checkout-btn ${this.state.className}`}>CHECKOUT</button>
				</div>
			</div>
		)
	}
}