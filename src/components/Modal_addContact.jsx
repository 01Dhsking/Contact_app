import { X } from 'lucide-react'
import { createPortal } from 'react-dom'

export const    Modal_addContact = ({onClose, openModal, children}) => {
    return createPortal(
        <>
        {
            openModal && (
                <div className='absolute top-0 z-40 grid h-screen w-screen
                place-item-center backdrop-blur-sm'>
                    <div className='relative z-50 m-auto min-h-[200px] min-w-[80%] bg-white
                    p-4 shadow-lg border border-teal-500 rounded'>
                        <div className='flex justify-end'>
                            <X onClick={onClose} className='self-end text-2xl
                            cursor-pointer' />
                        </div>
                        {children}
                    </div>
                </div>
            )
        }
        </>
        , document.getElementById("Modal_addContact-root")
    )
}