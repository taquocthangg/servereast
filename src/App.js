
import { Header } from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Home from "./page/Home";
import Slider from "./page/Slider";
import Container from './page/Container';
function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Container/>
        <Home/>
        <Footer/>
    </div>
  );
}

export default App;
