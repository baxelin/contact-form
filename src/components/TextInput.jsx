function TextInput () {
    return (
        <>
            <label htmlFor="first-name">First Name *</label><br/>
            <input type="text" id="first-name" name="first-name" required/><br />
            <label htmlFor="last-name">Last Name *</label><br/>
            <input type="text" id="last-name" name="last-name" required/><br />
            <label htmlFor="email">E-mail *</label><br/>
            <input type="email" id="email" name="email" required/><br />
        </>
    )
}

export default TextInput