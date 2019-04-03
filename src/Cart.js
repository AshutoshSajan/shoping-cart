import React from './react';

export default class Cart extends React.Component {
	state = {

	}
	
	render(){
		return(
			<div className="cart">
				<div className="fas fa-cart-plus"></div>
				<ul>

				</ul>
				<button>CHECKOUT</button>
			</div>
		)
	}
}