import { Component } from "react";
import { INotFoundProps } from "./NotFound.types";
import NotFoundCSS from "./NotFound.module.css";

class NotFound extends Component<INotFoundProps> {
  state = {
    text: "Page",
  };

  componentDidMount() {
    this.setState({
      text: this.props.text,
    });
  }

  render() {
    return (
      <h1
        className={NotFoundCSS.title}
      >{`${this.state.text} has not been found`}</h1>
    );
  }
}

export { NotFound };
