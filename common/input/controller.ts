import { ChangeEvent, Dispatch, SetStateAction } from "react"

interface IInputController {
    setInput: Dispatch<SetStateAction<string>>
}

export const InputController = ({ setInput }: IInputController) => {
    const onChangeInput = (evt: ChangeEvent<HTMLInputElement>) => {
        const value = evt.target.value
        setInput(value)
    }
    return {
        onChangeInput
    }
}