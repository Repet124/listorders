import React from 'react';
import {cell} from '../style/table.module.sass';

class Order extends React.Component {


render() {
	return (
		<tr>
			<td className={cell}>{this.props.num}</td>
			<td className={cell}>{this.props.orderId}</td>
			<td className={cell}>{this.props.orderSum}</td>
		</tr>
	)
}

}

export default Order;