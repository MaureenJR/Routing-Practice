
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './components/Home';
import WordStyle from './components/WordStyle';
import Input from './components/Inputs';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/:currentInput' element={<Input/>}></Route>
        <Route path='/:word/:wordColor/:wordBackgoundColor' element={<WordStyle/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
