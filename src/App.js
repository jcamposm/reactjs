import './App.css';
import NavBar
from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="app">
  <NavBar /><br/>
  <ItemListContainer name="Jean Campos Maldonado" />
  </div>
  )
}

export default App;
