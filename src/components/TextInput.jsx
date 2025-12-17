import "./TextInput.css";

function TextInput () {
    return (
        <div className="input-text">
            <label htmlFor="first-name">First Name *</label>
            <input type="text" id="first-name" name="first-name" required/>
            <label htmlFor="last-name">Last Name *</label>
            <input type="text" id="last-name" name="last-name" required/>
            <label htmlFor="email">E-mail Address *</label>
            <input type="email" id="email" name="email" required/>
        </div>
    )
}

export default TextInput