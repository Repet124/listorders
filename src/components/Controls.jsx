import React from 'react';
import style from '../style/controls.module.sass';

class Controls extends React.Component {

handlerLeft = () => {
	this.props.handler('left');
}

handlerRight = () => {
	this.props.handler('right');
}

handlerReset = () => {
	this.props.handler('reset');
}

render() {
	let disabled = {
		left: false,
		right: false,
		reset: false
	}
	if (this.props.disabled) {
		disabled[this.props.disabled] = true;
	}
	return (
		<div className={style.controls}>
		<button disabled={disabled.left} className={style.btn} onClick={this.handlerLeft}>
			Туда
		</button>
		<button disabled={disabled.reset} className={style.btn} onClick={this.handlerReset}>
			В начало
		</button>
		<button disabled={disabled.right} className={style.btn} onClick={this.handlerRight}>
			Сюда
		</button>
		</div>
	)
}

}

export default Controls;