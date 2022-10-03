
import './App.css';
import AsignmentMark from './components/AsignmentMarks/AsignmentMark';
import Nav from './components/NavBar/Nav';
import Pricing from './components/Pricing/Pricing';
import ProductBar from './components/ProductBar/ProductBar';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <h1 className='text-5xl font-bold'>Pricing Hunt!!</h1>
      <Pricing></Pricing>
      <AsignmentMark></AsignmentMark>
      <ProductBar></ProductBar>
    </div>
  );
}

export default App;
