import React from 'react';

class Order extends React.Component {


render() {
	return (
		<tr>
			<td>{this.props.num}</td>
			<td>{this.props.orderId}</td>
			<td>{this.props.orderSum}</td>
		</tr>
	)
}

}

export default Order;