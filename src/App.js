
import { Header } from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Home from "./page/Home";
import Slider from "./page/Slider";
import Container from './page/Container';
import Slider1 from "./page/Slider1";
import Slider2 from "./page/Slider2";
function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
        <Home/>
      <Container/>
      <Slider1/>
      <Slider2/>
        <Footer/>
    </div>
  );
}

export default App;
