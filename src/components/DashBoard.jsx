import { Not } from "./Not"
import { Card, ShrunkenCard } from "./Card"
import { useState } from 'react'

export const DashBoard = ({contact, setContact}) => {

  return (
    <div>
      {contact.length <= 0 ? (
        <Not />
      ): (contact.map((contact) => (
        <ShowCase contact={contact} />
      )))}
    </div> 
  )
}

const ShowCase = ({contact}) => {
  const [size, setSize] = useState(false)
  function handleClick() {
    setSize(!size)
  }

  return (
    <div> 
      { size == true ?
        <Card key={contact.id} contact={contact} handleClick={() => handleClick()} /> :
        <ShrunkenCard handleClick={() => handleClick()} key={contact.id} contact={contact} />
      }
    </div> 
  );
}
