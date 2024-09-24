import "./App.css";
import "./index.css";

import { Navbar } from "./components";
import { Brand, Footer, Header, Introduction } from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Introduction />
      <Footer />
    </div>
  );
}

export default App;
