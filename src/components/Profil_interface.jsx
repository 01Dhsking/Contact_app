import React from 'react'
import { Modal_profil } from './Modal_profil'
import Mr_chat from '../assets/Mr_chat.jpg'

export const Profil_interface = ({onClose, openModal}) => {
  return (
    <Modal_profil openModal ={openModal} onClose={onClose}>
      <div className='flex justify-center'>
        <div className='w-60 h-60 border border-gray-600 rounded rounded-full overflow-hidden'>
          <img src={Mr_chat} alt="" />
        </div>
      </div>
      <button className='setting_button mt-10'>Codewith_dhsking</button>
    </Modal_profil>
  )
}
