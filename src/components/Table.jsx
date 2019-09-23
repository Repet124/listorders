import React from 'react';
import Order from './Order.jsx';

class Table extends React.Component {


render() {
	return (
		<table>
			<tr>
				<th>№</th>
				<th>id заказа</th>
				<th>Сумма</th>
			</tr>
			{this.props.data.map((item, i) => <Order key={i} num={i+this.props.current} orderId={item[0]} orderSum={item[1]} />)}
		</table>
	)
}

}

export default Table;