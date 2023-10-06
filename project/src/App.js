import logo from './logo.svg';
import './App.css';
import{ BrowserRouter ,Route,Routes} from "react-router-dom"
import Link from"./pages/link.js"
import  Success from"./pages/success.js"
function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
     <Route path="/link"  element={<Link/>}/>
     <Route path="/Success"  element={<Success/>}/>




     </Routes>
     
     
     
     
     
     </BrowserRouter>
    </div>
  );
}

export default App;
