import React from 'react';

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
		<div>
		<button disabled={disabled.left} onClick={this.handlerLeft}>
			Туда
		</button>
		<button disabled={disabled.reset} onClick={this.handlerReset}>
			В начало
		</button>
		<button disabled={disabled.right} onClick={this.handlerRight}>
			Сюда
		</button>
		</div>
	)
}

}

export default Controls;