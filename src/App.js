import './App.css';
import NavBar
from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="app">
  <NavBar /><br/>
  <ItemListContainer>Jean</ItemListContainer>
  </div>
  )
}

export default App;
