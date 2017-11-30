import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class Clock extends React.Component {
	constructor() {
		super();
		
		this.state = {
			"time": 100,
			"date": new Date(),
			};

		this.inc = this.inc.bind(this);
	}

	inc() {
		this.setState({
			time: this.state.time  + 1,			
		});	
	}

	render() {
		return (
		<div>
			<button onClick={this.inc}>Inc</button>
			<h2>Clock! {this.state.time} </h2>
		</div>
		);
	}
}

function App(props) {
	return (
		<div>
			<h2>ello from App{ props.name }</h2>
		</div>
	);
}

const el = (
	<div>
		<p>I'm a react element </p>
		<App name="hello" />
	</div>
);

ReactDOM.render(<Clock />,document.getElementById('root'));
registerServiceWorker();
