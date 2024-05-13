import { useState } from 'react'

export const useModal_setting = () => {
    const [openModal2, setOpenModal] = useState(false)

    const onOpen2 = () => {
        setOpenModal(true)
    }
    const onClose2 = () => {
        setOpenModal(false)
    }
    
    return {openModal2, onClose2, onOpen2}
}
