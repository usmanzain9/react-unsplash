import React from "react";
import axios from "axios";
import Searchbar from "./Searchbar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: [],
    total: 0
  };

  onSearchSubmit = async term => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID a035cbae13720e7583cd69087fbd009b5036969e70b1ec3d9422106bd04e4d2d"
      }
    });
    this.setState({
      images: response.data.results,
      total: response.data.total
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Searchbar onSubmit={this.onSearchSubmit} />
        Found {this.state.total} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
