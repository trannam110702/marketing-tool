import {useAppContext} from "../App"

const Form = () => {
  const {formData, setFormData, generateButton} = useAppContext();

    return <div className='center' id="generate-form">
    <label htmlFor="description">Describe your business industry/niche (required):</label><br/>
    <textarea required value={formData.description} onChange={e => setFormData(prev => {
      return ({...prev, description: e.target.value})
      
    })} name="description" id="description" type="text"/><br/>
    <label htmlFor="keyword">Keywords (optional): </label><br/>
    <input value={formData.keyword} name="keyword" id="keyword" type="text" onChange={e => setFormData(prev => ({...prev, keyword: e.target.value}))}/><br/><br/>
    <div className='center'>{generateButton}</div>
  </div>
}

export default Form;