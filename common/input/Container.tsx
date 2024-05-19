interface IInput {
    props: {
        className?: string
        placeholder?: string
        prefix?: string
        value: string
    }
}

const Input = ({ props }: IInput) => {
    const { className, placeholder, prefix, value } = props
    const setPrefix = `b`
    return (
        <input value={value} className={`${className} active:border-none bg-search rounded-lg h-[40px] w-full px-2 border-white border-2 border-solid`} placeholder={placeholder} />
    )
}

export default Input