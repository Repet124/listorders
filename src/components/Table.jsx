import React from 'react';
import Order from './Order.jsx';
import style from '../style/table.module.sass';

class Table extends React.Component {


render() {
	return (
		<table className={style.table}>
			<tr>
				<th className={style.cell}>№</th>
				<th className={style.cell}>id заказа</th>
				<th className={style.cell}>Сумма</th>
			</tr>
			{this.props.data.map((item, i) => <Order key={i} num={i+this.props.current} orderId={item[0]} orderSum={item[1]} />)}
		</table>
	)
}

}

export default Table;