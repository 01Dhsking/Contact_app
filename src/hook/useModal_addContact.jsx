import { useState } from 'react'

export const useModal_addContact = () => {
    const [openModal1, setOpenModal] = useState(false)

    const onOpen1 = () => {
        setOpenModal(true)
    }
    const onClose1 = () => {
        setOpenModal(false)
    }
    
    return {openModal1, onClose1, onOpen1}
}
