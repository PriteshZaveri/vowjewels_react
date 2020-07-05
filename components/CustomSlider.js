import React from "react";
import Slider from "react-slick";

class CustomSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: props.settings
    };
  }
  render() {
    return <Slider {...this.state.settings}>{this.props.children}</Slider>;
  }
}

export default CustomSlider;
