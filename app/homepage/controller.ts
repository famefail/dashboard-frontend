import { useState } from "react"

export const HomepageController = () => {
    const [createMode, setCreateMode] = useState(false)
    const [search, setSearch] = useState('')
    const onClickCreate = () => {
        setCreateMode(!createMode)
    }
    return {
        onClickCreate,
        setSearch,
        search,
        createMode,

    }
}