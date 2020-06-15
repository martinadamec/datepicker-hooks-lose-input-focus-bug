import React, {useState} from 'react';
import './App.css';
import Datepicker from "./Test/Datepicker";

function App() {
  const [ val, setVal ] = useState( '' );
  return (
    <div className="App">
      <>
        <input style={{marginBottom: '20px'}} type="text" value={val} onChange={( e ) => setVal( e.target.value )} />
        <Datepicker />
      </>
    </div>
  );
}

export default App;
