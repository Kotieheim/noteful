import React, { Component } from "react";

export class NoteErrorHandler extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static GetDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <h2>An error has occured</h2>;
    }
    return this.props.children;
  }
}

export default NoteErrorHandler;
