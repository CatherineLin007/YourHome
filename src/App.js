import './App.css';
import React, { Component, useState } from 'react';
import StateMachine from './StateMachine';
import { resModel } from './Choices';



export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { pressed: false, start: false, finish: false };
		this.addSpeed = this.addSpeed.bind(this);
		this.setStart = this.setStart.bind(this);
	}
	render() {
		try {
			document.title = "YourBirthPlace"
			document.querySelector('video').playbackRate = 1.0;
		}
		catch { }
		const fakeCube = (
			<div href="#" class="fakecube" style={{ "marginTop": "250px" }}>
				<div class="fakeface top"></div>
				<div class="fakeface bottom"></div>
				<div class="fakeface left"></div>
				<div class="fakeface right"></div>
				<div class="fakeface front"></div>
				<div class="fakeface back"></div>
			</div>
		)
		var cube;
		if (this.state.pressed) {
			cube = <StateMachine setStart={this.setStart}></StateMachine>
		}
		else {
			cube = fakeCube;
		}
		console.log(this.state.start)
		const videoPlay = (<video autoPlay muted loop id="myVideo">
			<source src="Tube1.mp4" type="video/mp4"></source>
		</video>)
		return (
			<div>
				{!this.state.finish && videoPlay}
				{cube}
				{!this.state.start && resModel(this.state.pressed)}

			</div>
		);
	}
	componentDidMount() {
		document.addEventListener('keydown', this.addSpeed);
		document.addEventListener('keyup', this.reduceSpeed);
	}
	addSpeed() {
		if (this.state.start === true) {
			return;
		}
		this.setState({ pressed: true })
		try {
			document.querySelector('video').playbackRate = 3.0;
		}
		catch { }
	}
	reduceSpeed() {
		try {
			document.querySelector('video').playbackRate = 1.0;
		}
		catch { }
	}
	setStart() {
		this.setState({ start: true });
	}
}

