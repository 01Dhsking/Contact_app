import { ControlCenter, SearchBar } from './components/ControlCenter'
import { DashBoard } from './components/DashBoard'
import { LoadData } from './components/LoadData'
import { useEffect, useState } from 'react'
import {AddAndUpdate} from './components/AddAndUpdate'
import {ToastContainer} from 'react-toastify'
import { useModal } from './hook/useModal'


function App()
{
  const  [contact, setContact] = useState([])
  const {openModal, onClose, onOpen} = useModal()

  return (
    <>
      <LoadData contact={contact} setContact={setContact} />
      <ControlCenter /> 
      <div className="mx-auto max-w-[800px] px-4">
        <SearchBar contact={contact} setContact={setContact}
        openModal={openModal} onClose={onClose} onOpen={onOpen} />
        <DashBoard contact={contact} setContact={setContact} />
      </div>
      <ToastContainer position="bottom-center" />
      <AddAndUpdate openModal={openModal} onClose={onClose} />
    </>
  )
}

export default App
