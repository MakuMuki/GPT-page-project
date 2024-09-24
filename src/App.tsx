import "./App.css";
import "./index.css";

import { Navbar } from "./components";
import { Brand, Footer, Header } from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Footer />
    </div>
  );
}

export default App;
