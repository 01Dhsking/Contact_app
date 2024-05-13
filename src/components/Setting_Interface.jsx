import React from 'react'
import { Modal_setting } from './Modal_setting'

export const Setting_Interface = ({onClose, openModal}) => {
  return (
    <Modal_setting openModal ={openModal} onClose={onClose}>
      <button className='setting_button'>Account</button>
      <button className='setting_button'>Change mode</button>
      <button className='setting_button'>Delete account</button>
      <button className='setting_button'>Disconnection</button>
    </Modal_setting>
  )
}
