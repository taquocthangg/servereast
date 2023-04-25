
import { Header } from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Home from "./page/Home";
import Slider from "./page/Slider";
import Slider1 from "./page/Slider1";
function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Slider1/>
        <Home/>
        <Footer/>
    </div>
  );
}

export default App;
