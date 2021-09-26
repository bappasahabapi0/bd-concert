import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Singers from './Components/Singers/Singers';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Singers></Singers>
      <Footer/>
    </div>
  );
}

export default App;
