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
    <div className="App">
  <div className='main'>
    <h1 className='center'>Catchy AI Business Name Ideas {new Date().getFullYear()}</h1>
    <p className='center'>Name it. Brand it. Own it. <br/>Discover your perfect shop name with Avada’s smart generator! This powerful tool inspires you with creative and unique shop name ideas that perfectly align with your brand’s mission and core values.</p>
    {showResult ? <Result/> : <Form />}
  </div>
</div>
  </AppContext.Provider>
}

export default App;
