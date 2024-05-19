import { useState } from "react"

export const ModalController = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    return {
        title,
        setTitle,
        description, 
        setDescription
    }
}