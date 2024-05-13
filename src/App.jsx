import { ControlCenter, SearchBar } from './components/ControlCenter'
import { DashBoard } from './components/DashBoard'
import { LoadData } from './components/LoadData'
import { useEffect, useState } from 'react'
import { AddAndUpdate } from './components/AddAndUpdate'
import { ToastContainer } from 'react-toastify'
import { useModal_addContact } from './hook/useModal_addContact'
import { useModal_setting } from './hook/useModal_setting'
import { useModal_profil } from './hook/useModal_profil'
import { Setting_Interface } from './components/Setting_Interface'
import { Profil_interface } from './components/Profil_interface'

function App()
{
  const  [contact, setContact] = useState([])
  const {openModal1, onClose1, onOpen1} = useModal_addContact()
  const {openModal2, onClose2, onOpen2} = useModal_setting()
  const {openModal3, onClose3, onOpen3} = useModal_profil()

  return (
    <>
      <LoadData contact={contact} setContact={setContact} />
      <ControlCenter onOpen_setting={onOpen2} onOpen_profil={onOpen3}/> 
      <div className="mx-auto max-w-[800px] px-4">
        <SearchBar contact={contact} setContact={setContact}
        openModal={openModal1} onClose={onClose1} onOpen={onOpen1} />
        <DashBoard contact={contact} setContact={setContact} />
      </div>
      <ToastContainer position="bottom-center" />
      <AddAndUpdate openModal={openModal1} onClose={onClose1} />
      <Setting_Interface openModal={openModal2} onClose={onClose2}/>
      <Profil_interface openModal={openModal3} onClose={onClose3}/>
    </>
  )
}

export default App
