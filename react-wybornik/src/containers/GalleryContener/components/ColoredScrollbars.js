import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";

export default class ColoredScrollbars extends Component {
  state = {
    top: 0
  };

  handleUpdate = values => {
    const { top } = values;
    this.setState({ top });
  };

  renderView = ({ style, ...props }) => {
    const viewStyle = {
      paddingRight: document.documentElement.clientWidth > 799 ? `16px` : 0
    };
    return (
      <div className="box" style={{ ...style, ...viewStyle }} {...props} />
    );
  };

  renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: `gray`,
      zIndex: 9999,
      width: `10px`,
      borderRadius: `5px`,
      marginLeft: `-4px`
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  render() {
    return (
      <Scrollbars
        renderView={this.renderView}
        renderThumbVertical={this.renderThumb}
        onUpdate={this.handleUpdate}
        {...this.props}
      />
    );
  }
}
