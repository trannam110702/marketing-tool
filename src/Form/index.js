import { useState } from 'react';
import getNames from '../api';

const Form = () => {
 const [formData, setFormData] = useState({description: "", keyword: ""})
 const [loading, setLoading] = useState(false);

 const generate = async () => {
    try {
        if (loading) return;
        setLoading(true);
        const res = await getNames();
        console.log(res);
        
    } catch (error) {
        
    } finally {
        setLoading(false);
    }
 }

    return (
      <div className="App">
        <div className='main'>
          <h1 className='center'>Catchy AI Business Name Ideas 2024</h1>
          <p className='center'>Name it. Brand it. Own it. <br/>Discover your perfect shop name with Avada’s smart generator! This powerful tool inspires you with creative and unique shop name ideas that perfectly align with your brand’s mission and core values.</p>
          <div className='center' id="generate-form" action={null}>
            <label htmlFor="description">Describe your business industry/niche (required):</label><br/>
            <textarea required value={formData.description} onChange={e => setFormData(prev => ({...prev, description: e.value}))} name="description" id="description" type="text"/><br/>
            <label htmlFor="keyword">Keywords (optional): </label><br/>
            <input value={formData.keyword} name="keyword" id="keyword" type="text" onChange={e => setFormData(prev => ({...prev, keyword: e.value}))}/><br/><br/>
            <button disabled={loading} onClick={generate} className='center'>{loading ? "Generating..." : "Generate name ideas"}</button>
          </div>
        </div>
      </div>
    );
}

export default Form;