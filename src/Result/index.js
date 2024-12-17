import {useAppContext} from "../App"

const Result = () => {
    const {result, formData, setShowResult, generateButton, loading} = useAppContext();

    const formatedData = result.reduce((acc, item) => {
        const lastRow = acc[acc.length - 1];
        if (lastRow.length < 4) lastRow.push(item) 
            else acc.push([item]);
        return acc;
    }, [[]])


    return <div className='center result'>
        <p>Your business information</p>
        <ul>
            <li>Describe your business: {formData.description}</li>
            <li>Keyword: {formData.keyword}</li>
        </ul>
        <h2>Top 20 Unique Store Names of {new Date().getFullYear()} to Inspire You</h2>
    {formatedData.map((row, rowIndex) => {
        return <div className="row">
            {row.map((item, index) => {
               return <div className="collumn">{4*(rowIndex) + (index + 1)}. {item}</div>
            })}
        </div>
    })}
    <div className='center button-group'>
        {!loading && <button className="secondary" onClick={() => {setShowResult(false)}}>Let’s start over</button>}
        {<button onClick={() => window.open('https://shopify.pxf.io/RGG7mN', 'blank')}>Get more ideas</button>}
    </div>
  </div>
}

export default Result;