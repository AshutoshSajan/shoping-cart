import React from  "react";

export default class Size extends React.Component {
	state = {
		size: ["XS", "S", "M", "ML", "L", "XL", "XXL"],
	}

	uniqueId = () => {

	}

	render(){
		return (
			<section className="sizes">
				<h2>Sizes:</h2>
				<div className="filtered-size">
					{
						this.state.size.map(size => 
						<div className="circle" key={""}>
						 <span className="circle-txt">{size}</span>
						</div>
					)}
				</div>
				<p>Leave a star on Github if this repository was useful :)</p>
				<div className="likes-sec">
					<button className="like-btn">
						<span>
							<i className="fas fa-star"></i>
						</span>
						<span>Star</span>
					</button>
					<div className="no-of-likes">
						<span>502</span>
					</div>
				</div>
			</section>
		)
	}
}