import './StateMachine.css';
import React, { Component } from 'react';
import Choices from './Choices';
import { Suspense } from "react";

export default class StateMachine extends Component {
	constructor(props) {
        super(props);
        this.state = {
            start: false,
			end: false,
			parentStart: props.setStart,
			notSetParent: true
        };
    }
	render() {
		if(this.state.end){
			return <div>end</div>;
		}
		if(this.state.start){
			if(this.state.notSetParent){
				this.state.parentStart();
				this.setState({notSetParent:false});
			}
			return <Suspense fallback={null}><Choices></Choices></Suspense>;
			
		}
		return (
			// start page
			<>
				<div href="#" class="cube" onClick={() => {this.setState({start: true});}} style={{"marginTop": "250px"}}>
					<div class="face top"><h1 style={{marginTop:"25%"}}>?</h1></div>
					<div class="face bottom"><h1 style={{marginTop:"25%"}}>?</h1></div>
					<div class="face left"><h1 style={{marginTop:"25%"}}>?</h1></div>
					<div class="face right"><h1 style={{marginTop:"25%"}}>?</h1></div>
					<div class="face front"><h1 style={{marginTop:"25%"}}>?</h1></div>
					<div class="face back"><h1 style={{marginTop:"25%"}}>?</h1></div>
				</div>
                
			</>
		);
	}
}