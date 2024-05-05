import { Modal } from "./Modal"
import { ErrorMessage, Field, Form, Formik } from "formik"
import {addDoc, doc, collection, setDoc } from "firebase/firestore"
import { db } from "../../config/firebase"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import * as Yup from "yup"


const contactShemaValidation = Yup.object().shape({
    name: Yup.string().required("Nom requis"),
    firstname: Yup.string().required("Prenom requis"),
    email: Yup.string().email("Email invalide").required("Email requis"),
    phone: Yup.string().required("Téléphone requis")
})

export const AddAndUpdate = ({openModal, onClose, isUpdate, contact}) => {

    const addContact = async(contact) => {
        try {
            const contactRef = collection(db, 'contact')
            await addDoc(contactRef, contact)
            onClose()
            toast.success('Contact ajouté avec succes a la liste')

        } catch(error) {
            console.log(error);
        }
    }

    /**
     * @typedef {Object} Contact
     * @property {string} name
     * @property {string} firstname
     * @property {string} email
     * @property {string} phone
     * 
     * 
     */
    
    
    /**
     * 
     * @param {Contact} contact 
     * @param {string} id 
     */
    const updateContact = async(contact, id) => {
        try {
            const contactRef = doc(db , 'contact', id)
            await setDoc(contactRef, contact)
            onClose()
            toast.success('Contact modifier avec succes a la liste')

        } catch(error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Modal openModal={openModal} onClose={onClose}>
                <Formik validationSchema={contactShemaValidation}
                    initialValues={isUpdate ? {
                        name: contact.name,
                        firstname: contact.firstname,
                        email: contact.email,
                        phone: contact.phone,
                    } : {
                        name: "",
                        firstname: "",
                        email: "",
                        phone: "",
                    }}
                    onSubmit={(values)=> {
                        console.log(values);
                        isUpdate ? updateContact(values, contact.id) : addContact(values)
                    }}
                >
                    <Form className="flex flex-col gap-2">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="name" className="text-gray-700">Nom:</label>
                            <Field name="name" className="border h-10 border-teal-500 rounded p-4" />
                            <div className="text-sm text-red-500">
                                <ErrorMessage name="name" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="firstname" className="text-gray-700">Prénom:</label>
                            <Field name="firstname" className="border h-10 border-teal-500 rounded p-4" />
                            <div className="text-sm text-red-500">
                                <ErrorMessage name="firstname" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="text-gray-700">Email:</label>
                            <Field name="email" className="border h-10 border-teal-500 rounded p-4" />
                            <div className="text-sm text-red-500">
                                <ErrorMessage name="email" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="phone" className="text-gray-700">Téléphone:</label>
                            <Field name="phone" className="border h-10 border-teal-500 rounded p-4" />
                            <div className="text-sm text-red-500">
                                <ErrorMessage name="phone" />
                            </div>
                        </div>
                        <button type="submit" className="bg-teal-500 px-3 py-1.5 text-white
                        my-3 self-end">
                            {isUpdate ? "Modifier le" : "Ajouter un"} contact
                        </button>
                    </Form>
                </Formik>
            </Modal>
        </div>
    )
}
