import "./App.css";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="container-fluid">
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo center">
            Contacts
          </a>
        </div>
      </nav>
      <div className="container">
        <Contacts />
      </div>
    </div>
  );
}

export default App;
