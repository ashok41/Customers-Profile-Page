import React from 'react';
import axios from 'axios';
import { config } from './utils/config';

class Product extends React.Component {
	constructor(props) {
	  	super(props);
		this.state = {profile: null};
  	}

  	componentDidMount() {
		return axios
		  .get(config.baseUrl + 'api/profile')
		  .then(res => {
			if(res.status === 200) {
				this.setState({profile: res.data.orders[this.props.match.params.id]});
			}
		  })
	}
	  
  	render () {
		if(this.state.profile) {
			return (
				<div>
					<div className="order-details-info">
						<div>
							<h6>Order ID:#{this.state.profile.id}</h6>
							<div className="about">{this.state.profile.price}</div>
						</div>
					</div>
					<div className="product-info">
						<div className="profile-img"><img src={this.state.profile.product.picture} /></div>
						<div>
							<h5>{this.state.profile.product.name}</h5>
							<div>{this.state.profile.product.description}</div>
							<div className="product-date">{this.state.profile.product.orderDate}</div>
							<div><span className="product-status">Order Status:</span> {this.state.profile.product.orderStatus}</div>
						</div>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default Product
