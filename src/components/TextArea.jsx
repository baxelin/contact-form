import "./TextArea.css"

function TextArea () {
    return (
        <div className="message-box">
            <label htmlFor="message">Message *</label><br />
            <textarea name="message"></textarea>
        </div>
    )
}

export default TextArea