import { Pencil } from 'lucide-react'
import { Trash2 } from 'lucide-react'
import {db} from "../../config/firebase"
import { deleteDoc, doc } from 'firebase/firestore'
import { AddAndUpdate } from './AddAndUpdate'
import { useModal_addContact } from '../hook/useModal_addContact'
import { CircleChevronUp } from 'lucide-react'
import { CircleChevronDown } from 'lucide-react'
import { useState } from 'react'

export function Card({contact , handleClick}) {

  const {openModal, onClose, onOpen} = useModal_addContact()
  const deleteContact = async(id) => {
    try {
      await deleteDoc(doc(db, "contact", id))
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <>
    <div key={contact.id} className="shadow-lg rounded-lg flex flex-col
    gap-3 border border-teal-500 p-5 my-5">
      <ul className="flex flex-col">
        <li className="flex items-center bg-teal-500 p-3 text-sm border border-gray">
          <span className="font-bold text-white mr-2">
            Nom: 
          </span>
          <span className="text-white">
            {contact.name}
          </span>
        </li>
        <li className="flex items-center bg-teal-500 p-3 text-sm border border-gray">
          <span className="font-bold text-white mr-2">
            Prenom: 
          </span>
          <span className="text-white">
            {contact.firstname}
          </span>
        </li>
        <li className="flex items-center bg-teal-500 p-3 text-sm border border-gray">
          <span className="font-bold text-white mr-2">
            Email: 
          </span>
          <span className="text-white">
            {contact.email}
          </span>
        </li>
        <li className="flex items-center bg-teal-500 p-3 text-sm border border-gray">
          <span className="font-bold text-white mr-2">
            Telephone: 
          </span>
          <span className="text-white">
            {contact.phone}
          </span>
        </li>
      </ul>
      <div className="flex items-center gap-5">
        <Pencil onClick={onOpen} size={32} className='text-white bg-yellow-500 
        cursor-pointer p-1 rounded'/>
        <Trash2 size={32} className='text-white bg-red-500 
        cursor-pointer p-1 rounded' onClick={() => deleteContact(contact.id)}/>
        <div className='w-full bg-red-200' />
        <CircleChevronUp onClick={handleClick} size={35} color='#14b8a6'
        className='w-28 cursor-pointer' />
      </div>
    </div>
    <AddAndUpdate contact={contact} isUpdate openModal={openModal} onClose={onClose}/>
    </>
  )
}


export function ShrunkenCard({contact , handleClick}) {

  return (
      <div key={contact.id} className="shadow-lg rounded-lg flex flex-col
        gap-3 border border-teal-500 p-5 my-5">
        <div className='flex items-center bg-teal-500 p-3 text-sm border 
          border-gray font-bold text-white mr-2'>
          <div className='flex justify-center w-full'>
            <div className=' flex mr-2'>
              {contact.name}
            </div>
            <div className=''>
              {contact.firstname}
            </div>
          </div>
          
          <CircleChevronDown onClick={handleClick} size={35} color='white' 
          className='w-10 cursor-pointer'/>
        </div>
      </div>
  )
}