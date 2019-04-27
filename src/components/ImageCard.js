import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      span: 0
    };
    this.imageRef = React.createRef();
  }

  imageLoaded = () => {};

  setSpan = () => {
    const imgHeight = this.imageRef.current.clientHeight;
    const spans = Math.ceil(imgHeight / 10 + 1);
    this.setState({ span: spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.span}` }}>
        <img
          onLoad={this.setSpan}
          ref={this.imageRef}
          alt={description}
          src={urls.regular}
        />
      </div>
    );
  }
}

export default ImageCard;
