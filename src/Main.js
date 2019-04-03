import React from "react"
import Loading from "./Loading"; 
import Size from './Size';
import Header from './Header';
import Cards from './Cards';

export default class Main extends React.Component {
	state = {
		data: null,
		loading: true
	}

	componentDidMount = () => {
		fetch("https://react-shopping-cart-67954.firebaseio.com/products.json")
		.then(res => res.json())
		.then(({products}) => this.setState({data:products, loading: false}))
	}

	render() {
		return(
			// navigator.online ?
			this.state.loading ? <Loading /> :
			<section className="main-sec">
				<Size data={this.state.data}/>
				<div>
					<Header data={this.state.data} />
					<div className="card">
						<Cards data={this.state.data} />
					</div>
				</div>
			</section>		
		)
	}
}

// <div>
// 	<p className={this.state.className}>No internet connection</p>
// 	{
// 		setTimeout(() => this.setState({className: "error internet-error"}), 2000)
// 	}
// </div>	