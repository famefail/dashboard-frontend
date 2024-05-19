import { Dispatch, SetStateAction } from "react"
import { textareaController } from "./controller"

interface ITextarea {
    props: {
        setTextarea: Dispatch<SetStateAction<string>>
        className?: string
        placeholder?: string
        prefix?: string
        value: string
    }
}

const Textarea = ({ props }: ITextarea) => {
    const { className, placeholder, prefix, value, setTextarea } = props
    const { onChangeTextarea } = textareaController({ setTextarea })
    return (
        <textarea onChange={onChangeTextarea} value={value} className={`${className}  rounded-lg w-full p-2 border-black border-2 border-solid`} placeholder={placeholder} />
    )
}

export default Textarea