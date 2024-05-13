import React from 'react'
import { X } from 'lucide-react'
import { createPortal } from 'react-dom'

export const Modal_setting = ({onClose, openModal, children}) => {
  return createPortal(
    <>
    {
        openModal && (
            <div className='absolute top-0 z-40 h-screen w-screen
            flex justify-end backdrop-blur-sm'>
                <div className='static z-50 mt-28 mr-2 min-h-full min-w-[40%] bg-white
                p-5 shadow-lg border border-teal-500 rounded-3xl w-1/5 h-full'>
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
    , document.getElementById("Modal_setting-root")
    )
}
