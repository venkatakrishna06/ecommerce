import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import {Switch,Route} from 'react-router-dom';
import Shop from "./pages/Shop/Shop";
function App() {
  return (
    <div className="App">
        <switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={Shop}/>
            </switch>
    </div>
  );
}

export default App;
