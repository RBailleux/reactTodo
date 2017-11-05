import React, { Component, type Node } from 'react';

type CounterProps = {
  value: number
}

function Counter(props: CounterProps) {
    return (
        <div>Counted {props.value} {props.children}</div>
    );
}

type AppState = {
  count: number
}

class App extends Component<{}, AppState> {
  constructor() {
    super();
    this.onButtonClick = this.onButtonClick.bind(this);
    this.state = {
      count: 0
    };
  }
  onButtonClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    this.setState({
      count: this.state.count +1
    });
  }
  render() {
    return (
      <div>
        <Counter value={this.state.count}>
          <button onClick={this.onButtonClick}>Click</button>
        </Counter>
      </div>
    );
  }
}

export default App;
