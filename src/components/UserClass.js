import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };
  }

  render() {
    const { name } = this.props;
    const { count, count2 } = this.state;

    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <h2>Count2: {count2}</h2>
        <button
          onClick={() => {
            // NEVER UPDATE STATE VARIABLES DIRECTLY
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Count++
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: Kathmandu</h3>
        <h3>Contact: rikeshbohara0@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
