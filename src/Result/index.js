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
            <li>Describe your business: {formData.description}</li>
            <li>Keyword: {formData.keyword}</li>
        </ul>
        <h2>Here are some names we think you might like</h2>
        <div className="result-items">
            {formatedData.map((row, rowIndex) => {
                return <div className="row">
                    {row.map((item, index) => {
                        return <div className="collumn">{4 * (rowIndex) + (index + 1)}. {item}</div>
                    })}
                </div>
            })}
        </div>
        <div className='center button-group'>
            {!loading && <button className="secondary" onClick={() => {
                setShowResult(false)
            }}>Let’s start over</button>}
            {<button onClick={() => window.open('https://shopify.pxf.io/RGG7mN', 'blank')}>Get more ideas</button>}
        </div>
    </div>
}

export default Result;
