import TextInput from "../components/TextInput"
import RadioGroup from "../components/RadioGroup"
import TextArea from "../components/TextArea"
import Checkbox from "../components/Checkbox"
import SubmitButton from "../components/SubmitButton"

function FormsPage () {
    return (
        <>
            <h1>Contact Us</h1>
            <form action="_self" method="get" autoComplete="off">
                <TextInput />
                <RadioGroup />
                <TextArea />
                <Checkbox />
                <SubmitButton />
            </form>
        </>
    )
}

export default FormsPage