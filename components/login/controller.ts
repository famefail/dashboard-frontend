import { useRouter } from "next/navigation"
import { ChangeEvent, useState } from "react"

export const LoginController = () => {
    const router = useRouter()

    const [username, setUsername] = useState('')
    const onChangeUsername = (evt: ChangeEvent<HTMLInputElement>) => {
        const value = evt.target.value
        setUsername(value)
    }
    const onClickSignIn = () => {
        console.log(router)
        router.push('/Homepage')
    }
    return {
        username,
        onChangeUsername,
        onClickSignIn
    }
}