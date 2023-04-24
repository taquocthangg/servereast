
import { Header } from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Home from "./page/Home";
import Slider from "./page/Slider";
function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
        <Home/>
        <Footer/>
    </div>
  );
}

export default App;
