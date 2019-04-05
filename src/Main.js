import React from "react"
import Loading from "./Loading"; 
import Size from './Size';
import Header from './Header';
import Cards from './Cards';
import Cart from './Cart';

export default class Main extends React.Component {
	state = {
		data: null,
		loading: true,
		isOpen: false,
	}

	componentDidMount = () => {
		fetch("https://react-shopping-cart-67954.firebaseio.com/products.json")
		.then(res => res.json())
		.then(({products}) => this.setState({data:products, loading: false}))
	}

	addToCart = (data) => {
		// console.log(data)
	}
	
	toggleCart = () => {
		const toggle = this.state.isOpen;
		this.setState({isOpen: !toggle})
	}

	handleFilter = (size) => {
		const filtered = this.state.data.filter(obj => obj.availableSizes.includes(size))
		this.setState({filtered})
	}

	render() {
		// console.log(this.state);
		// setTimeout(() => this.setState({className: "internet-error"}), 2000)
		// setTimeout(this.handleFilter ,1000)
		return(
			// <>
				// navigator.online ?
				this.state.loading ? <Loading /> :
				<>
				<section className="main-sec">
					<Size data={this.state.data} handleFilter={this.handleFilter}/>
					<div>
						<Header data={this.state.data} />
						<div className="card">
							<Cards data={this.state} addToCart={this.addToCart} toggleCart={this.toggleCart}/>
						</div>
					</div>
				</section>
				<Cart data={this.state} toggleCart={this.toggleCart} />
			</>
			// <p className={`error ${this.state.className}`}>No internet connection</p>
		)
	}
}

