import { Component } from "react";
import { Spinner } from "react-bootstrap";

class NetRow extends Component {
  state = {
    shows: [],
    isLoading: true,
  };

  getShows = async () => {
    try {
      const response = await fetch(
        "https://www.omdbapi.com/?i=tt3896198&apikey=6c2bed19&s=" +
          this.props.search
      );
      if (response.ok) {
        const data = await response.json();
        console.log("data", data.Search);
        this.setState({
          shows: data.Search,
          isLoading: false,
        });
      } else {
        throw new Error("errore mannaggia");
      }
    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: false,
      });
    }
  };

  componentDidMount() {
    this.getShows();
  }

  render() {
    return (
      <>
        {this.state.isLoading && (
          <div className="text-center">
            <Spinner animation="border" variant="danger" />
          </div>
        )}
        {this.state.shows.map((shows) => {
          return (
            <div key={shows.imdbID} className="col mb-2 text-center px-1">
              <img
                className="img-fluid"
                src={shows.Poster}
                alt="movie picture"
                style={{ height: "280px" }}
              />
            </div>
          );
        })}
      </>
    );
  }
}

export default NetRow;
