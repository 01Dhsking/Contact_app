import { useState } from 'react'

export const useModal_profil = () => {
    const [openModal3, setOpenModal] = useState(false)

    const onOpen3 = () => {
        setOpenModal(true)
    }
    const onClose3 = () => {
        setOpenModal(false)
    }
    
    return {openModal3, onClose3, onOpen3}
}
