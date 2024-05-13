import React from 'react'
import { X } from 'lucide-react'
import { createPortal } from 'react-dom'

export const Modal_profil = ({onClose, openModal, children}) => {
  return createPortal(
    <>
    {
        openModal && (
            <div className='absolute top-0 z-40 h-full w-full
            flex justify-start backdrop-blur-sm'>
                <div className='relative z-50 mt-28 ml-2 min-h-1/2 min-w-[40%] bg-white
                p-5 shadow-lg border border-teal-500 rounded-3xl w-1/5 h-1/2'>
                    <div className='flex justify-end'>
                        <X onClick={onClose} size={45} className='self-end text-2xl
                        cursor-pointer mb-5' />
                    </div>
                    {children}
                </div>
            </div> 
        )
    }
    </>
    , document.getElementById("Modal_profil-root")
    )
}
