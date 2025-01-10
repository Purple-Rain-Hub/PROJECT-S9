import NetNavbar from "./components/NetNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import NetFooter from "./components/NetFooter";
import NetHomeContent from "./components/NetHomeContent";

function App() {
  return (
    <>
      <NetNavbar />
      <NetHomeContent />
      <NetFooter />
    </>
  );
}

export default App;
