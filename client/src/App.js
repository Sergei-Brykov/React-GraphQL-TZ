import './App.css';
import {useState} from "react";

function App() {
  const [auth, setAuth] = useState(false)
  const router = useRouter()

  return (
    <div className="App">
      Hello world
    </div>
  );
}

export default App;
