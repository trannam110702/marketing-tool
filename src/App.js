import { createContext, useContext, useState } from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';

const AppContext = createContext({})

export const useAppContext = () => useContext(AppContext);

function App() {
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({description: "", keyword: ""});
  const [result, setResult] = useState([]);

  return <AppContext.Provider value={{formData, setFormData, showResult, setShowResult, result, setResult, loading, setLoading}}>
    <div className="App center">
  <div className='main'>
    <div>
    <h1 className='center'>Business Name Ideas by Avada Commerce</h1>
    <p className='center description'>The Perfect AI Tool to Generate Business Name and Online Store Ideas in Just 5 Seconds.</p></div>
    {showResult ? <Result/> : <Form />}
  </div>
</div>
  </AppContext.Provider>
}

export default App;
