import React from "react";

export default class Card extends React.Component {
  render() {
    return (
      <div key={this.props.id}>
        <div>Title: {this.props.title}</div>
        <div>Author: {this.props.author}</div>
      </div>
    );
  }
}
