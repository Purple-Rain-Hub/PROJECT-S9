import { Component } from "react";

class NetRow extends Component {
  state = {
    shows: [],
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
        });
      } else {
        throw new Error("errore mannaggia");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getShows();
  }

  render() {
    return (
      <>
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
