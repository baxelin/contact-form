import "./RadioGroup.css"

function RadioGroup () {
    return (
        <div className="radio-group">
            <label htmlFor="">Query Type *</label>
            <div className="flex-start">
                <input type="radio" id="general" name="queryType" value="general" />
                <label htmlFor="general">General Enquiry</label>  
            </div>
            <div className="flex-start">
                <input type="radio" id="support" name="queryType" value="support" />
                <label htmlFor="support">Support Request</label>                
            </div>
        </div>
    )
}

export default RadioGroup