interface IButton {
  props: {
    title: string
    className?: string
  }
}

const Button = ({ props }: IButton) => {
  const { title, className } = props
  return (
    <button className={`${className} bg-success rounded-lg text-white py-2 w-max px-4  m-auto`}>
      {title}
    </button>
  )
}

export default Button