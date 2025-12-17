import "./Checkbox.css"

function Checkbox () {
    return (
        <div className="checkbox-group">
            <input type="checkbox" id="checkbox" name="checkbox"/>
            <label htmlFor="checkbox">I consent to being contacted by the team. *</label>
        </div>
    )
}

export default Checkbox