
import { Header } from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Home from "./page/Home";

function App() {
  return (
    <div className="App">
      <Header/>
        <Home/>
        <Footer/>
    </div>
  );
}

export default App;
