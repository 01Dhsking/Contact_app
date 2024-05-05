import Logo from '../assets/logo.png'
import { User } from 'lucide-react'
import { Settings } from 'lucide-react'
import { Search } from 'lucide-react'
import { CirclePlus } from 'lucide-react'
import { collection, onSnapshot } from 'firebase/firestore'
import {db} from "../../config/firebase"


export function ControlCenter() {

    return (
        <div className='flex items-center p-7 shadow-md mb-5'>
            <div className='w-20'>
                <User size={42} color='gray' className='cursor-pointer' />
            </div>
            <div className='w-full flex justify-center'>
                <img src={Logo} alt="" className=" w-20" />
            </div>
            <div className='w-20'>
                <Settings size={42} color='gray' className='cursor-pointer' />
            </div>
        </div>
    )
}

export const SearchBar = ({contact, setContact, openModal, onClose, onOpen}) => {

    // const {openModal, onClose, onOpen} = useModal()
    const filterContacts = (e) => {
        const value = e.target.value
        const contactsRef = collection(db, "contact")

        onSnapshot(contactsRef, (snapshot) => {
            const contactLists = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });
            const filteredContacts = contactLists.filter((contact)=>
            contact.name.toLowerCase().includes(value.toLowerCase()))

            setContact(filteredContacts);
            return filteredContacts
        })
    }

    return (
        <div className='p-4 relative flex items-center flex-grow gap-4'>
            <input 
                onChange={filterContacts}
                type="text" 
                className='h-10 w-full rounded-md
                border border-dark py-2 pl-10 text-gray-500' />
            <div className="absolute ml-2">
                <Search size={25} color='gray' className='cursor-pointer'/>
            </div>
            <CirclePlus onClick={onOpen} size={30} color='gray' className='cursor-pointer' />
        </div>
    )
}


