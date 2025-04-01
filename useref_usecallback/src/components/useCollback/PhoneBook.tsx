// objetivo: se utiliza para memorizar una instancia de  una funcion
//hace qe un hijo no renderice

import { useCallback, useState } from "react"

// ejemplo:
// supongamos qe tienes un numero de telefono con frecuencia.
// en vez de marcarlo continuamente lo vamos almancenar en los ocntactos del telefono 
// al menos qe el numero cambie siempre utilizo el mismo contacto

interface Contact{
    id: number,
    name:string,
    phone: string
}


interface ContactProps{
    contact: Contact
    onCall:(phone:string) => void
}   

const ContactCard = ({contact,onCall}:ContactProps) =>{
    console.log(`renderizando contacto ${contact.name}`)


    return(
        <div>
            <h3>{contact.name}</h3>
            <p>telefono: {contact.phone}</p>
            <button onClick={() => onCall(contact.phone)}>LLamar</button>
        </div>
    )


}

export const PhoneBook = () => {
    const [contacts, setContacts] = useState<Contact[]>([
        {
            id:1, name:"Manzana", phone:"123-456-789"
        },
        {
            id:2, name:"Pera", phone:"123-456-789"
        },
        {
            id:3, name:"Leche", phone:"123-456-789"
        },
   ])

   const [log, setLog] = useState<string>('');
   const makeCall = useCallback((phone:string) => setLog(`Llamando al phone ${phone}`),[])

   const addContacto = () =>{
    const newContact = {
        id:contacts.length +1,
        name: `Contacto ${contacts.length +1 }`,
        phone: `${Math.floor(1000000000 + Math.random()*90000000)}`
    }

    setContacts([...contacts, newContact])
   }

   return(
    <div>
        <h2>Agenda Contacto</h2>
        {contacts.map(contact =>(
            <ContactCard key={contact.id} contact={contact} onCall={makeCall}/>
        ) )}

        <button onClick={addContacto}>Agregar Contacto</button>
        <p>{log}</p>
    </div>
   )
}