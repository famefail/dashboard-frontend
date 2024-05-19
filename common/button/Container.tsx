import { MouseEventHandler } from "react"

interface IButton {
  props: {
    title: string
    className?: string
    onClick?: MouseEventHandler<HTMLButtonElement>
  }
}

const Button = ({ props }: IButton) => {
  const { title, className, onClick } = props
  return (
    <button onClick={onClick} className={`${className} bg-success rounded-lg text-white py-2 w-max px-4  m-auto`}>
      {title}
    </button>
  )
}

export default Button