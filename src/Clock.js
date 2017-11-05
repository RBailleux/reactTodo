import React, { Component, type Node } from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentWillMount() {
    const clock = () => {
      this.setState({
         date: new Date()
      });
    }
    this.timerId = setInterval(clock, 1000);
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate", nextState.date.toLocaleTimeString());
    return true;
  }
  componentWillUpdate(nextProps, nextState){
    console.log("componentWillUpdate ", nextState.date.toLocaleTimeString());
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        <h3>{this.state.date.toLocaleTimeString()}</h3>
      </div>
    );
  }
}

export default Clock;
