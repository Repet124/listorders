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
		default:
			current = this.state.current;
	}

	if (current !== this.state.current) {
		this.changePage(current);
	}
}

changePage = (current) => {
	let data = [
		["3409", "1158"],
		["3449", "16896"],
		["2599", "42364"],
		["3544", "124"],
		["3669", "3037"],
		["3842", "40618"],
		["3637", "7486"],
		["34287", "5114"],
		["34310", "38684"],
		["34308", "1592"]
	];

	// fetch(`/listorders.php?start=${current}&limit=${this.step}`)
	// 	.then(response => response.json())
	// 	.then(data => ()=>{
	// 		this.setState((state, props) => {
	// 			return {...state, data: data, current: current}
	// 		})
	// 	})
		this.setState((state, props) => {
			return {...state, data: data, current: current}
		})
}

componentDidMount() {
	this.changePage(this.props.start);
}

render() {
	let disabled = this.state.current === 0 ? 'left' : null;
	return (
		<>
		<Table data={this.state.data} />
		<Controls
			handler={this.handlerMove}
			diabled={disabled}
		/>
		</>
	)
}

}

export default App;
