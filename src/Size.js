import React from  "react";
import uuid from './uuid';


export default class Size extends React.Component {
	state = {
		size: ["XS", "S", "M", "ML", "L", "XL", "XXL"],
	}

	handleFilter = (e) => {
		const size = e.target.innerText;
		this.props.handleFilter(size);
	}

	render(){
		// console.log(this.props)
		return (
			<section className="sizes">
				<h2>Sizes:</h2>
				<div className="filtered-size">
					{
						this.state.size.map(size => 
						<div className="circle" key={uuid()} onClick={this.handleFilter}>
							<span className="circle-txt">{size}</span>
						</div>
					)}
				</div>
				<p className="repo-link">Check this app <a href="#">Here</a>:)</p>
				{/*<div className="likes-sec">
					<button className="like-btn">
						<span>
							<i className="fas fa-star"></i>
						</span>
						<span>Star</span>
					</button>
					<div className="no-of-likes">
						<span>502</span>
					</div>
				</div>*/}
			</section>
		)
	}
}