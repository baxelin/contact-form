import TextInput from "../components/TextInput"
import RadioGroup from "../components/RadioGroup"
import TextArea from "../components/TextArea"
import Checkbox from "../components/Checkbox"
import SubmitButton from "../components/SubmitButton"
import "./FormsPage.css"

function FormsPage () {
    return (
        <main>
            <h1>Contact Us</h1>
            <form method="get" autoComplete="off">
                <TextInput />
                <RadioGroup />
                <TextArea />
                <Checkbox />
                <SubmitButton />
            </form>
        </main>
    )
}

export default FormsPage