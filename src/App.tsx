import "./App.css";
import "./index.css";

import { Navbar } from "./components";
import {
  Brand,
  Features,
  Footer,
  Header,
  Introduction,
  Possibility,
} from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Introduction />
      <Features />
      <Possibility />
      <Footer />
    </div>
  );
}

export default App;
