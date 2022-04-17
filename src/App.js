import './App.scss';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cards from './containers/Cards';
import Header from './containers/Header';
import Photos from './containers/Photos';
import Reviews from './containers/Reviews';

//import orange from './images/desktop/image-header.jpg'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header />
      <Cards/>
      <Reviews/>
      <Photos />
      <Footer/>
    </div>
  );
}

export default App;
