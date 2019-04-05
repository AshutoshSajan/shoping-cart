import React from 'react';

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
				<ul>

				</ul>
				<div className="subtotal-btn">
					<p>SUBTOTAL</p>
					<p>price</p>
				</div>
				<button className={`checkout-btn ${this.state.className}`}>CHECKOUT</button>
			</div>
		)
	}
}