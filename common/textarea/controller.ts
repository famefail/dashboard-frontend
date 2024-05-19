import { ChangeEvent, Dispatch, SetStateAction } from "react"

interface ITextareaController {
    setTextarea: Dispatch<SetStateAction<string>>
}

export const textareaController = ({ setTextarea }: ITextareaController) => {
    const onChangeTextarea = (evt: ChangeEvent<HTMLTextAreaElement>) => {
        const value = evt.target.value
        setTextarea(value)
    }
    return {
        onChangeTextarea
    }
}