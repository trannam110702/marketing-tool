import {useEffect, useState} from "react";
import {useAppContext} from "../App"
import getNames from "../api"

const Form = () => {
    const {formData, setFormData, loading, setLoading, setResult, setShowResult} = useAppContext();
    const [validatation, setValidation] = useState({})

    const generate = async () => {
        if (!formData.description) return setValidation(prev => ({...prev, description: "This field is required"}))
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

    useEffect(() => {
        if (document.getElementById("description"))
            document.getElementById("description").placeholder = "Describe your business industry/niche (required): \nEx: A sustainable brand making eco-friendly soybean wax food wraps and candles for young adults";
    }, [])

    const generateButton = <button disabled={loading} onClick={generate}>{loading ? <div className="lds-ring">
        <div/>
        <div/>
        <div/>
    </div> : "Generate name ideas"}</button>;

    return <div className='center' id="generate-form">
    <textarea placeholder="Describe your business industry/niche (required):" required value={formData.description}
              onChange={e => setFormData(prev => {
                  setValidation(null)
                  return ({...prev, description: e.target.value})
              })} name="description" id="description" type="text"/><br/>
        {validatation?.description && <div className="validation">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10 6C10.4142 6.00001 10.75 6.3358 10.75 6.75001L10.7499 10.25C10.7499 10.6642 10.4141 11 9.99993 11C9.58572 11 9.24994 10.6642 9.24994 10.25L9.25 6.74999C9.25001 6.33577 9.5858 5.99999 10 6Z"
                    fill="#8E1F0B"/>
                <path
                    d="M11 13C11 13.5523 10.5523 14 10 14C9.44772 14 9 13.5523 9 13C9 12.4477 9.44772 12 10 12C10.5523 12 11 12.4477 11 13Z"
                    fill="#8E1F0B"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.5 10C15.5 13.0376 13.0376 15.5 10 15.5C6.96243 15.5 4.5 13.0376 4.5 10C4.5 6.96243 6.96243 4.5 10 4.5C13.0376 4.5 15.5 6.96243 15.5 10Z"
                      fill="#8E1F0B"/>
            </svg>
            {validatation?.description}</div>}
        <input placeholder="Keywords (optional): keywords you want to add to your business name"
               value={formData.keyword} name="keyword" id="keyword" type="text"
               onChange={e => setFormData(prev => ({...prev, keyword: e.target.value}))}/><br/><br/>
        <div className='center generate-btn'>{generateButton}</div>
    </div>
}

export default Form;
