import NetNavbar from "./components/NetNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import NetFooter from "./components/NetFooter";
import NetHomeContent from "./components/NetHomeContent";
import { Component } from "react";
import NetProfile from "./components/NetProfile";
import NetSettings from "./components/NetSettings";

class App extends Component {
  state = {
    showPage: 1,
  };

  handleChangePage = (num) => {
    this.setState({ showPage: num });
  };

  render() {
    return (
      <>
        <NetNavbar handleChangePage={this.handleChangePage} />
        {this.state.showPage == 1 ? (
          <NetHomeContent />
        ) : this.state.showPage == 2 ? (
          <NetProfile />
        ) : (
          <NetSettings />
        )}
        <NetFooter />
      </>
    );
  }
}

export default App;
