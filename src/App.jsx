import React from 'react';
import Table from './components/Table.jsx';
import Controls from './components/Controls.jsx';


class App extends React.Component {

constructor(props) {
	super(props);
	this.state = {
		data: [],
		current: null
	}

	this.step = props.step
}

handlerMove = direction => {
	let current;

	switch (direction) {
		case 'left':
			current = this.state.current <= this.step ? 0 : this.state.current - this.step;
			break;
		case 'right':
			current = this.state.current + this.step;
			break;
		case 'reset':
			current = 0;
			break;
		default:
			current = this.state.current;
	}

	if (current !== this.state.current) {
		this.changePage(current);
	}
}

changePage = (current) => {
	fetch(`/listorders.php?start=${current}&limit=${this.step}`)
		.then(response => response.json())
		.then(data => {
			this.setState((state, props) => {
				return {...state, data: data, current: current}
			})
		})
}

componentDidMount() {
	this.changePage(this.props.start);
}

render() {
	let disabled = this.state.current === 0 ? 'left' : null;
	return (
		<>
		<Table data={this.state.data} current={this.state.current}/>
		<Controls
			handler={this.handlerMove}
			disabled={disabled}
		/>
		</>
	)
}

}

export default App;
