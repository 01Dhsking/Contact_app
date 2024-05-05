import React from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import {db} from "../../config/firebase"
import { useEffect, useState } from 'react'

export const LoadData = ({contact, setContact}) => {

    useEffect(() => {
      const getContacts = async() => {
        try {
          const contactRef = collection(db, "contact")
          onSnapshot(contactRef, (snapshot) => {
            const contactList = snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                ...doc.data()
              }
            })
            setContact(contactList)
            return contactList
          })
        } catch(error) {
          console.log(error)
        }
      }
      getContacts()
    }, [])
}
