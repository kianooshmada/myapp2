import React, { Component } from "react";
export class SignIn extends Component {
  constructor(props) {
    super(props);
    // this.setState({
    //   auth: false,
    // });
    //this.setState({ this.props.auth: !this.props.auth });
  }
  componentDidMount() {
    console.log("2222222");
  }
  render() {
    return (
      <div>
        <h1>Sign in....</h1>
      </div>
    );
  }
}
