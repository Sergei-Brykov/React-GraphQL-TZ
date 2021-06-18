import './App.css';
import {useEffect, useState} from "react"
import { useHistory } from "react-router-dom";

function App() {
  const [auth, setAuth] = useState(false)
  const history = useHistory();

  useEffect(() => {
    history.push('./login')
  }, []);


  return (
    <div className="App">
      Hello world
    </div>
  );
}

export default App;
