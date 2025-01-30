import { Component } from "react";
import Error from "../error/Error";

export default class ErrorBoundary extends Component {
  state = {
    error: false
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: true
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h2>Now we have some problems</h2>
          <p>please try again a later...</p>
          <Error/>
        </div>
      );
    }

    return this.props.children;
  }
}