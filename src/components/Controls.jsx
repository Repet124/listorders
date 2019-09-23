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
	let diabled = {
		left: false,
		right: false,
		reset: false
	}
	if (this.props.diabled) {
		diabled[this.props.diabled] = true;
	}
	return (
		<div>
		<button diabled={diabled.left} onClick={this.handlerLeft}>
			Туда
		</button>
		<button diabled={diabled.reset} onClick={this.handlerReset}>
			В начало
		</button>
		<button diabled={diabled.right} onClick={this.handlerRight}>
			Сюда
		</button>
		</div>
	)
}

}

export default Controls;