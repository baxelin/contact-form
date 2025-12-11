function RadioGroup () {
    return (
        <>
            <label htmlFor="">Query Type *</label><br />
            <input type="radio" id="general" name="queryType" value="general" />
            <label htmlFor="general">General Enquiry</label>
            <input type="radio" id="support" name="queryType" value="support" />
            <label htmlFor="support">Support Request</label>
            <br />
        </>
    )
}

export default RadioGroup