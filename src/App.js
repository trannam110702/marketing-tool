import { createContext, useContext, useState } from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';
import getNames from "./api"

const AppContext = createContext({})

export const useAppContext = () => useContext(AppContext);

function App() {
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({description: "", keyword: ""});
  const [result, setResult] = useState([]);

  const generate = async () => {
    try {
        if (loading) return;
        setLoading(true);
        const res = await getNames(formData);
        if (res.success) {
          setResult(res.data);
          setShowResult(true);
        }
        
    } catch (error) {
        
    } finally {
        setLoading(false);
    }
 }

  const generateButton = <button disabled={loading} onClick={generate} >{loading ? "Generating..." : "Generate name ideas"}</button>;

  return <AppContext.Provider value={{formData, setFormData, showResult, setShowResult, result, setResult, loading, setLoading, generateButton}}>
    <div className="App">
  <div className='main'>
    <h1 className='center'>Catchy AI Business Name Ideas 2024</h1>
    <p className='center'>Name it. Brand it. Own it. <br/>Discover your perfect shop name with Avada’s smart generator! This powerful tool inspires you with creative and unique shop name ideas that perfectly align with your brand’s mission and core values.</p>
    {showResult ? <Result/> : <Form />}
  </div>
</div>
  </AppContext.Provider>
}

export default App;
