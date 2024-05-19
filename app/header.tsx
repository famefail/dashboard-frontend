import Image from "next/image"
import text from '../public/Text.svg'

const Header = () => {
    return (
        <div className="flex bg-primary-500 h-16 items-center px-4 justify-between">
            <div>
                <Image
                    src={text}
                    alt='text'
                    height={24}
                    width={69}
                />
            </div>
        </div>
    )
}

export default Header