import { Dispatch, SetStateAction } from "react"
import { InputController } from "./controller"

interface IInput {
    props: {
        setInput: Dispatch<SetStateAction<string>>
        className?: string
        placeholder?: string
        prefix?: string
        value: string
    }
}

const Input = ({ props }: IInput) => {
    const { className, placeholder, prefix, value, setInput } = props
    const { onChangeInput } = InputController({ setInput })
    return (
        <input onChange={onChangeInput} value={value} className={`${className}  bg-search rounded-lg h-[40px] w-full px-2 border-black border-2 border-solid`} placeholder={placeholder} />
    )
}

export default Input