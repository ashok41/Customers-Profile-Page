import React from 'react';
import axios from 'axios';
import { config } from './utils/config';
import {Link} from 'react-router-dom';


class Profile extends React.Component {
	constructor(props) {
	  	super(props);
		this.state = {profile: null};
  	}

  	componentDidMount() {
		return axios
		  .get(config.baseUrl + 'api/profile')
		  .then(res => {
			if(res.status === 200) {
				this.setState({profile: res.data});
				console.log(res.data);
			}
		  })
	}
	  
  	render () {
		if(this.state.profile) {
			return (
				<div>
					<div className="profile-info">
						<div className="profile-img"><img src={this.state.profile.picture} /></div>
						<div>
							<h6>{this.state.profile.name.first} {this.state.profile.name.last}</h6>
							<div className="about">{this.state.profile.about}</div>
							<ul className="contact-info">
								<li>
									<div>Company:</div>
									<div>{this.state.profile.company}</div>
								</li>
								<li>
									<div className=''>Phone:</div>
									<div>{this.state.profile.phone}</div>
								</li>
								<li>
									<div className=''>Email:</div>
									<div>{this.state.profile.email}</div>
								</li>
								<li>
									<div className=''>Address: </div>
									<div>{this.state.profile.address}</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="title">Orders</div>
					<div className="orders">
						<div className="table-row header">
							<div className="text">#ID</div>
							<div className="text">Product Details</div>
							<div className="text">Price</div>
						</div>
						{
							this.state.profile.orders.map((data, index) => {
								return (
									<div key={data.id} className="table-row row">
										<div className="text">{index}</div>
										<div className="text"><Link to={'product/' + index}>{data.product.name}</Link></div>
										<div className="text">{data.price}</div>
									</div>
								);
							})
						}
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default Profile
