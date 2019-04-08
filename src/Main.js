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
		className: "",
		filtered: [],
		cartItem: [],
		count: 0
	}

	componentDidMount = () => {
		fetch("https://react-shopping-cart-67954.firebaseio.com/products.json")
		.then(res => res.json())
		.then(({products}) => this.setState({data:products, loading: false}))
	}

	addToCart = (data) => {
    // console.log(data, "main.js")
    // const cartItem = []
    // this.setState({cartItem: this.state.cartItem.concat([data])})
    
    const count = 0;
    this.state.cartItem.includes(data) ? this.setState({cartItem: this.state.cartItem.concat([data, count++])}) : (this.setState({cartItem: this.state.cartItem.concat([data, count])}))
  }
	
	toggleCart = () => {
		const toggle = this.state.isOpen;
		this.setState({isOpen: !toggle})
	}

	openCart = () => {
		this.setState({isOpen: true})
	}

	handleFilter = (size) => {
		console.log("clicked")
		const filtered = this.state.data.filter(obj => obj.availableSizes.includes(size))
		this.setState({filtered})
	}

	handleRemove = (e, v) => {
		// console.log(v.id);
		this.setState({cartItem: this.state.cartItem.filter(item => item.id !== v.id)})
	}

	render() {
		console.log(this.state);
		setTimeout(() => this.setState({className: "internet-error"}), 1000);
		return(
			<React.Fragment>
				{
				navigator.onLine ?
				this.state.loading ? <Loading /> :
				(<section className="main-sec">
					<Size data={this.state.data} handleFilter={this.handleFilter}/>
					<div className="cards-section">
						<Header data={this.state.data} />
						<div className="card">
							<Cards data={this.state} addToCart={this.addToCart} openCart={this.openCart}/>
						</div>
					</div>
					<Cart data={this.state} toggleCart={this.toggleCart} handleRemove={this.handleRemove}/>
				</section> )
				: <p className={`error ${this.state.className}`}>No internet connection</p>
			}
			</React.Fragment>
		)
	}
}

